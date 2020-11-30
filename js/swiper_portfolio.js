let mql = window.matchMedia("screen and (max-height: 1300px)");


            if (mql.matches) {

                const swiper = new Swiper('.swiper-container', {
                    slidesPerView: 1,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    slidesOffsetAfter: 10,
                    slidesOffsetBefore: 10,
                    spaceBetween: 50,
                    breakpoints: {
                        // when window width is >= 480px
                        520: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        // when window width is >= 640px
                        768: {
                            //				slidesPerView: 2,
                            //				spaceBetween: 30,
                        },
                        // when window width is >= 640px
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        }
                    }
                });

            } else {

                const swiper = new Swiper('.swiper-container', {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    slidesPerColumnFill: 'column',
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    slidesOffsetAfter: 10,
                    slidesOffsetBefore: 10,
                    spaceBetween: 50,
                    breakpoints: {
                        // when window width is >= 480px
                        520: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            slidesPerColumn: 1,
                            slidesPerColumnFill: 'column',
                        },
                        // when window width is >= 640px
                        968: {
                            //				slidesPerView: 3,
                            //				spaceBetween: 20,
                            //		slidesPerColumn: 2,
                            //		slidesPerColumnFill: 'column',
                        },
                        // when window width is >= 640px
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            slidesPerColumn: 2,
                            slidesPerColumnFill: 'column',
                        }
                    }
                });

            }