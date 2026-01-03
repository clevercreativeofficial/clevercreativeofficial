document.addEventListener("DOMContentLoaded", () => {
            const menuBar = document.getElementById("menu-bar");
            const logo = document.getElementById("logo");
            const logoBox = document.getElementById('logo-container')
            const sidebar = document.getElementById("sidebar");
            const logout = document.getElementById("logout");
            const logoutIcon = document.querySelector("#logout i");
            const labelNames = document.querySelectorAll("li span");
            const userProfile = document.getElementById("userProfile");

            // Define screen size breakpoint
            const isSmallDevice = window.innerWidth <= 768; // Adjust breakpoint if needed

            if (!isSmallDevice) {
                // On wider screens, load state from localStorage
                const isCollapsed = localStorage.getItem("sidebar-collapsed") === "true";
                if (isCollapsed) {
                    collapseSidebar();
                } else {
                    expandSidebar();
                }
            } else {
                // On small devices, always collapse by default
                collapseSidebar();
            }

            menuBar.addEventListener("click", () => {
                const isNowCollapsed = sidebar.classList.toggle("w-[70px]");
                logout.classList.toggle("w-[70px]");
                logoutIcon.classList.toggle("mx-1");
                logo.classList.toggle("hidden");
                logoBox.classList.toggle("w-[70px]");
                labelNames.forEach(label => label.classList.toggle("hidden"));
                userProfile.classList.toggle("hidden");


                // Only store state in localStorage for wider screens
                if (!isSmallDevice) {
                    localStorage.setItem("sidebar-collapsed", isNowCollapsed);
                }
            });

            function collapseSidebar() {
                sidebar.classList.add("w-[70px]");
                logout.classList.add("w-[70px]");
                logoutIcon.classList.add("mx-1");
                logo.classList.add("hidden");
                logoBox.classList.add("w-[70px]");
                labelNames.forEach(label => label.classList.add("hidden"));
                userProfile.classList.add("hidden");
            }

            function expandSidebar() {
                sidebar.classList.remove("w-[70px]");
                logout.classList.remove("w-[70px]");
                logoutIcon.classList.remove("mx-1");
                logo.classList.remove("hidden");
                logoBox.classList.remove("w-[70px]");
                labelNames.forEach(label => label.classList.remove("hidden"));
                userProfile.classList.remove("hidden");
            }
        });