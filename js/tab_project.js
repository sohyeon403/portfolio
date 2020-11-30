$(function() {
            'use strict';

            let tabMenus,
                tabContents;
            tabMenus = document.querySelectorAll('.tab_menu_item_link');
            tabContents = document.querySelectorAll('.tab_content');


            for (let i = 0; i < tabMenus.length; i++) {

                tabMenus[i].addEventListener('click', function(e) {

                    e.preventDefault();


                    for (let i = 0; i < tabMenus.length; i++) {
                        tabMenus[i].className = 'tab_menu_item_link';
                    }

                    this.className = 'tab_menu_item_link is-active';


                    for (let i = 0; i < tabContents.length; i++) {
                        tabContents[i].className = 'tab_content';
                    }

                    document.getElementById(this.dataset.id).className = 'tab_content is-active';

                });
            }
        }());