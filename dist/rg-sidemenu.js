var riot = require('riot');
riot.tag('rg-sidemenu', '<div class="overlay { expanded: opts.sidemenu.expanded }" onclick="{ close }"></div> <div class="sidemenu { expanded: opts.sidemenu.expanded }"> <h4 class="header">{ opts.sidemenu.header }</h4> <ul class="items"> <li class="item" each="{ opts.sidemenu.items }" onclick="{ action }"> { text } </li> </ul> <div class="body"> <yield></yield> </div> </div>', 'rg-sidemenu .overlay { position: fixed; top: 0; left: -100%; right: 0; bottom: 0; width: 100%; height: 100%; background-color: transparent; cursor: pointer; -webkit-transition: background-color 0.8s ease; -moz-transition: background-color 0.8s ease; -ms-transition: background-color 0.8s ease; -o-transition: background-color 0.8s ease; transition: background-color 0.8s ease; z-index: 50; } rg-sidemenu .overlay.expanded { left: 0; background-color: rgba(0, 0, 0, 0.5); } rg-sidemenu .sidemenu { position: fixed; top: 0; left: 0; height: 100%; width: 260px; overflow-y: auto; overflow-x: hidden; background-color: black; color: white; -webkit-transform: translate3d(-100%, 0, 0); -moz-transform: translate3d(-100%, 0, 0); -ms-transform: translate3d(-100%, 0, 0); -o-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0); -webkit-transition: -webkit-transform 0.5s ease; -moz-transition: -moz-transform 0.5s ease; -ms-transition: -ms-transform 0.5s ease; -o-transition: -o-transform 0.5s ease; transition: transform 0.5s ease; z-index: 51; } rg-sidemenu .sidemenu.expanded { -webkit-transform: translate3d(0, 0, 0); -moz-transform: translate3d(0, 0, 0); -ms-transform: translate3d(0, 0, 0); -o-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } rg-sidemenu .header { padding: 1.2rem; margin: 0; text-align: center; color: white; } rg-sidemenu .items { padding: 0; margin: 0; list-style: none; } rg-sidemenu .item { padding: 1rem 0.5rem; box-sizing: border-box; border-top: 1px solid #1a1a1a; color: white; } rg-sidemenu .item:last-child { border-bottom: 1px solid #1a1a1a; } rg-sidemenu .item:hover { cursor: pointer; background-color: #111; }', function(opts) {
		var _this = this;
		_this.close = function () {
			opts.sidemenu.expanded = false;
		};
	
});
