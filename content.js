chrome.storage.sync.get(['isHideThreadsEnabled', 'keywords'], function(data) {
    const isHideThreadsEnabled = data.isHideThreadsEnabled !== undefined ? data.isHideThreadsEnabled : false;
    const keywords = data.keywords || [];

    function isHomePage() {
        return window.location.pathname === "/home";
    }

    if (!isHomePage()) {
        console.log("Not on /home page, script will not run.");
        return;
    }

    const observer = new MutationObserver(() => {
        if (!isHomePage()) {
            observer.disconnect();
            return;
        }

        const tweets = document.querySelectorAll("article");

        tweets.forEach(tweet => {
            if (tweet.getAttribute("data-thread-processed")) return;
            tweet.setAttribute("data-thread-processed", "true");

            const containsKeyword = keywords.some(keyword =>
                tweet.innerText.includes(keyword)
            );

            const containsIcon = !!tweet.querySelector('img[alt="🧵"]');

            if (containsKeyword || containsIcon) {
                const tweetContent = tweet.querySelector(":scope > div");
                if (tweetContent) {
                    if (isHideThreadsEnabled) {
                        tweetContent.style.display = "none";
                        tweet.classList.add("hidden-thread");
                    } else {
                        tweetContent.style.display = "none";
                        tweetContent.classList.add("collapsed-tweet");

                        const toggleButton = document.createElement("button");
                        toggleButton.innerText = "➕";
                        toggleButton.classList.add("tweet-toggle-button");

                        toggleButton.addEventListener("click", () => {
                            const isCollapsed = tweetContent.style.display === "none";
                            tweetContent.style.display = isCollapsed ? "block" : "none";
                            toggleButton.innerText = isCollapsed ? "➖" : "➕";
                        });

                        tweet.insertBefore(toggleButton, tweet.firstChild);
                    }
                }
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
