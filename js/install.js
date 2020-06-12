/*

App Information Installer By @s1z4r
5/20/2020
https://sizu.gq


Bundle ID 	= CFBundleIdentifier
App Version = CFBundleShortVersionString
*/

var $$ = Dom7;

$$('.install-app').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'App Name Here' + '<br>Bundle Identifier: ' + 'Bundle Here' + '<br>Version: ' + 'Version Here' + '<br>Size: ' + 'Size Here', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=Link";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-addme').on('click', function() {
	app.dialog.create({
		title: 'Attention!',
		text: 'The App is Under Maintenance And Doesn\'t Work Yet.<br>What Do You Wanna Do?',
		buttons: [
			{
				text: '<a class="link external" href="twitter://user?screen_name=s1z4r">Follow me on Twitter</a>',
			},
			{
				text: '<a class="link external" href="cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.sizu.gq/">Add My Repository To Cydia</a>',
			},
		],
		verticalButtons: true,
		}).open();
});

$$('.install-8ballpool').on('click', function() {
	app.dialog.confirm('App Name: ' + '8 Ball Pool' + '<br>Bundle Identifier: ' + 'com.miniclip.8ballpoolmult' + '<br>Version: ' + '4.8.4' + '<br>Size: ' + '53.6 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=Link";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-pubgm').on('click', function() {
	app.dialog.confirm('App Name: ' + 'PUBG Mobile Hack' + '<br>Bundle Identifier: ' + 'com.tencent.ig' + '<br>Version: ' + '0.18.0' + '<br>Size: ' + '2.4 GB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=Link";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-minecraftpe').on('click', function() {
	app.dialog.confirm('App Name: ' + 'Minecraft: PE' + '<br>Bundle Identifier: ' + 'com.mojang.minecraftpe' + '<br>Version: ' + '1.14.60' + '<br>Size: ' + '210.7 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=Link";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-gtasa').on('click', function() {
	app.dialog.confirm('App Name: ' + 'GTA: San Andreas' + '<br>Bundle Identifier: ' + 'com.rockstargames.gta3sa' + '<br>Version: ' + '2.2' + '<br>Size: ' + '2.1 GB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=Link";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-facetune').on('click', function() {
	app.dialog.confirm('App Name: ' + 'Facetune' + '<br>Bundle Identifier: ' + 'com.lightricks.Facetune' + '<br>Version: ' + '2.8.2' + '<br>Size: ' + '62.6 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=Link";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-unc0ver').on('click', function() {
	app.dialog.confirm('App Name: ' + 'Unc0ver' + '<br>Bundle Identifier: ' + 'science.xnu.undecimus' + '<br>Version: ' + '4.3.1' + '<br>Size: ' + '62.6 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=Link";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-chimera').on('click', function() {
	app.dialog.confirm('App Name: ' + 'Chimera' + '<br>Bundle Identifier: ' + 'com.electrateam.chimera' + '<br>Version: ' + '1.4.0' + '<br>Size: ' + '91.4 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=Link";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-spotifyplus').on('click', function() {
	app.dialog.confirm('App Name: ' + 'Spotify ++' + '<br>Bundle Identifier: ' + 'com.spotify.client' + '<br>Version: ' + '8.5.58' + '<br>Size: ' + '102.2 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=Link";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-instagramplus').on('click', function() {
	app.dialog.confirm('App Name: ' + 'Instagram ++' + '<br>Bundle Identifier: ' + 'com.burbn.instagram' + '<br>Version: ' + '142.0' + '<br>Size: ' + '114.2 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=Link";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-flappybird').on('click', function() {
	app.dialog.confirm('App Name: ' + 'FlappyBird' + '<br>Bundle Identifier: ' + 'org.brandonplank.flappybird' + '<br>Version: ' + '2.5' + '<br>Size: ' + '83.8 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=Link";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-movieboxpro').on('click', function() {
	app.dialog.confirm('App Name: ' + 'MovieBoxPro' + '<br>Bundle Identifier: ' + 'com.xd.mbp' + '<br>Version: ' + '4.0' + '<br>Size: ' + '40.3 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=Link";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});
