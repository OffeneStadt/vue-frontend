<template>
    <header class="header-main header-transparent" :class="{'sticky': scrolled, 'navbar-style-2': NavbarStyle, 'navbar-style-3': NavbarStyle2}">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="menu-wrap">
                        <div class="brand-logo">
                            <a href="#">
                                <img src="../assets/img/logo/small-logo.png" alt="FORUM Offene Stadt | Logo">
                            </a>
                        </div>
                        <div id="hamburger" v-on:click="display_menu()">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul id="menu">
                            <li><a v-on:click="close_menu()" href="#start">Start</a></li>
                            <li><a v-on:click="close_menu()" href="#forum">Forum 2019</a></li>
                            <!--<li><a v-on:click="close_menu()" href="#speaker">Redner*innen</a></li>-->
                            <li><a v-on:click="close_menu()" href="#programm">Programm</a></li>
                            <li><a v-on:click="close_menu()" href="#projekte">Projekte</a></li>
                            <li><a v-on:click="close_menu()" href="#partner">Partner</a></li>
                            <!--<li><a v-on:click="close_menu()" href="#openapps">Open Apps</a></li>-->
                            <li><a v-on:click="close_menu()" href="#veranstalter">Veranstalter</a></li>
                            <li><a v-on:click="close_menu()" href="#team">Team</a></li>
                            <li><a v-on:click="close_menu()" href="#summit">CfG Summit</a></li>
                            <!--<li><a v-on:click="close_menu()" href="#rueckblick">Rückblick 2018</a></li>-->
                            <li><a v-on:click="close_menu()" href="#contact">Kontakt</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import $ from 'jquery'
    export default {
		name: 'Navbar',
        props: ["NavbarStyle", "NavbarStyle2"],
		data () {
			return {
                load: false,
                limitPosition: 200,
                scrolled: true,
                lastPosition: 500
			}
		},
		methods: {
            // responsive menu script
            display_menu : function(){
                var body = document.getElementsByTagName("body")[0];
                (!body.classList.contains("display_menu")) ? body.classList.add("display_menu") : body.classList.remove("display_menu");
            },
            close_menu : function(){
				var body = document.getElementsByTagName("body")[0];
				body.classList.remove('display_menu');
            },
            loaded : function(){
                document.getElementsByTagName("body")[0].style.overflowY = "hidden";
                this.load = true;
            },

            // sticky menu script
            handleScroll() {
                if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
                    this.scrolled = true;
                    // move up!
                } 
                
                if (this.lastPosition > window.scrollY) {
                    this.scrolled = true;
                    // move down
                }
                
                this.lastPosition = window.scrollY;
                //this.scrolled = window.scrollY > 50; // uncomment to make menu transparent again
            }
        }, 
        created() {
            window.addEventListener("scroll", this.handleScroll);
        },
        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        },

        mounted() {
            (function() {
                function classChange() {
                    var lastId,
                    topMenu = $("#menu"),
                    topMenuHeight = topMenu.outerHeight(),
                    menuItems = topMenu.find("a"),
                    scrollItems = menuItems.map(function() {
                        var item = $($(this).attr("href"));
                        if (item.length) {
                            return item;
                        }
                    });

                    // Bind scroll handler to menu items
                    $(window).on('scroll', function() {
                        var fromTop = $(this).scrollTop() + topMenuHeight + 81;
                        var cur = scrollItems.map(function() {
                            if ($(this).offset().top < fromTop)
                            return this;
                        });
                        cur = cur[cur.length - 1];
                        var id = cur && cur.length ? cur[0].id : "";
                        if (lastId !== id) {
                            lastId = id;
                            menuItems
                            .parent().removeClass("active")
                            .end().filter("[href='#" + id + "']").parent().addClass("active");
                        }
                    });

                    // Bind click handler to menu items
                    $('#menu li a[href*="#"]:not([href="#"])').on("click", function() {
                        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                            var target = $(this.hash);
                            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                            if (target.length) {
                            $('html, body').animate({
                                scrollTop: target.offset().top - 81
                            }, 800);
                                return false;
                            }
                        }
                    });
                }
                classChange();
            })();
        }
    }
    
</script>

<style lang='scss'>
	@import '../assets/scss/variables.scss';
	@import '../assets/scss/components/header.scss';
</style>
