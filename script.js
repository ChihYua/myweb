        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感謝您的訊息！我會盡快回覆您。');
            this.reset();
        });
