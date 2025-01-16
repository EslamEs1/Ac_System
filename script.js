document.addEventListener('DOMContentLoaded', function() {
    // Dropdown handling
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        
        link.addEventListener('click', () => {
            // Close other dropdowns
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active');
        });
    });

    // Navigation handling
    const navLinks = document.querySelectorAll('[data-section]');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section
            const sectionId = link.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('active');
            }
            
            // If link is in dropdown, keep dropdown open
            const dropdown = link.closest('.dropdown');
            if (dropdown) {
                dropdown.classList.add('active');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Previous JavaScript functionality remains the same
});



document.addEventListener("DOMContentLoaded", function () {
    // Previous JavaScript code remains

    // Revenue Chart
    const revenueCtx = document.getElementById("revenueChart").getContext("2d");
    new Chart(revenueCtx, {
        type: "line",
        data: {
            labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو"],
            datasets: [
                {
                    label: "الإيرادات",
                    data: [65000, 75000, 85000, 95000, 120000, 150000],
                    borderColor: "#2563eb",
                    backgroundColor: "rgba(37, 99, 235, 0.1)",
                    fill: true,
                },
                {
                    label: "المصروفات",
                    data: [45000, 48000, 42000, 46000, 44000, 45000],
                    borderColor: "#dc2626",
                    backgroundColor: "rgba(220, 38, 38, 0.1)",
                    fill: true,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    // Courses Distribution Chart
    const coursesCtx = document.getElementById("coursesChart").getContext("2d");
    new Chart(coursesCtx, {
        type: "doughnut",
        data: {
            labels: ["البرمجة", "التصميم", "التسويق", "إدارة الأعمال"],
            datasets: [
                {
                    data: [35, 25, 20, 20],
                    backgroundColor: [
                        "#2563eb",
                        "#059669",
                        "#d97706",
                        "#7c3aed",
                    ],
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "bottom",
                },
            },
        },
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Previous JavaScript code remains

    // Task Management
    const addTaskBtn = document.querySelector(".add-task-btn");
    if (addTaskBtn) {
        addTaskBtn.addEventListener("click", function () {
            const tasksList = document.querySelector(".tasks-list");
            const newTaskId = `task${tasksList.children.length + 1}`;

            const taskItem = document.createElement("div");
            taskItem.className = "task-item";
            taskItem.innerHTML = `
                <input type="checkbox" id="${newTaskId}">
                <label for="${newTaskId}">مهمة جديدة</label>
                <span class="due-date">اليوم</span>
            `;

            tasksList.appendChild(taskItem);
        });
    }

    // Task Completion
    document.addEventListener("change", function (e) {
        if (e.target.type === "checkbox" && e.target.closest(".task-item")) {
            const taskItem = e.target.closest(".task-item");
            if (e.target.checked) {
                taskItem.style.opacity = "0.5";
                setTimeout(() => {
                    taskItem.remove();
                }, 1000);
            }
        }
    });

    // Auto-update Schedule Status
    function updateScheduleStatus() {
        const now = new Date();
        const currentHour = now.getHours();

        document.querySelectorAll(".schedule-item").forEach((item) => {
            const timeText = item.querySelector(".time").textContent;
            const hour = parseInt(timeText.split(":")[0]);
            const status = item.querySelector(".status");

            if (hour < currentHour) {
                status.className = "status completed";
                status.textContent = "منتهية";
            } else if (hour === currentHour) {
                status.className = "status active";
                status.textContent = "جارية";
            } else {
                status.className = "status upcoming";
                status.textContent = "قادمة";
            }
        });
    }

    // Update schedule status every minute
    updateScheduleStatus();
    setInterval(updateScheduleStatus, 60000);
});


document.addEventListener('DOMContentLoaded', function() {
    // Previous code remains

    // Handle section visibility
    function showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.section-content').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected section
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
        }
    }

    // Update navigation to show sections
    document.querySelectorAll('.nav-link, .dropdown-link').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.dataset.section) {
                e.preventDefault();
                showSection(link.dataset.section);
            }
        });
    });

});


