const _0x1a06ec = _0x1442;
(function (_0x36b185, _0x32d60c) {
	const _0x1fcc08 = _0x1442,
		_0x25d5c8 = _0x36b185();
	while (!![]) {
		try {
			const _0x4e2cc5 =
				-parseInt(_0x1fcc08(0x1cd)) / 0x1 +
				(-parseInt(_0x1fcc08(0x1d0)) / 0x2) *
					(parseInt(_0x1fcc08(0x1ca)) / 0x3) +
				(parseInt(_0x1fcc08(0x1cc)) / 0x4) *
					(parseInt(_0x1fcc08(0x1e7)) / 0x5) +
				-parseInt(_0x1fcc08(0x206)) / 0x6 +
				-parseInt(_0x1fcc08(0x1d6)) / 0x7 +
				parseInt(_0x1fcc08(0x1f0)) / 0x8 +
				-parseInt(_0x1fcc08(0x1db)) / 0x9;
			if (_0x4e2cc5 === _0x32d60c) break;
			else _0x25d5c8['push'](_0x25d5c8['shift']());
		} catch (_0x363a53) {
			_0x25d5c8['push'](_0x25d5c8['shift']());
		}
	}
})(_0x3884, 0xbe785);
let promptObjOverlay = document[_0x1a06ec(0x1df)]('promptObjOverlay'),
	promptObj = document[_0x1a06ec(0x1df)](_0x1a06ec(0x1f7)),
	promptBg = document[_0x1a06ec(0x1df)](_0x1a06ec(0x1cf)),
	promptImgs = document[_0x1a06ec(0x1df)](_0x1a06ec(0x1d4)),
	scrollToNextBtn = document[_0x1a06ec(0x1df)](_0x1a06ec(0x1e8)),
	promptTitle = document[_0x1a06ec(0x1df)](_0x1a06ec(0x1e3)),
	promptLink = document[_0x1a06ec(0x1df)]('promptLink'),
	promptFullDesc = document[_0x1a06ec(0x1df)]('promptFullDesc'),
	feedbackr = document[_0x1a06ec(0x1df)](_0x1a06ec(0x1d9)),
	landingpagecopywriter = document[_0x1a06ec(0x1df)](_0x1a06ec(0x1fb)),
	planifier = document[_0x1a06ec(0x1df)](_0x1a06ec(0x1e2)),
	scrolless = document[_0x1a06ec(0x1df)](_0x1a06ec(0x1c8)),
	magicbouton = document[_0x1a06ec(0x1df)](_0x1a06ec(0x1e1)),
	promptImg = (_0x1144ad) => {
		const _0x586b16 = _0x1a06ec;
		let _0x5c6b5c = document[_0x586b16(0x1c9)](_0x586b16(0x1f9));
		return (_0x5c6b5c[_0x586b16(0x1f8)] = _0x1144ad), _0x5c6b5c;
	},
	currentScrollIndex = 0x0;
function scrollToNext() {
	const _0x7f07fc = _0x1a06ec;
	let _0x4a5022 = promptImgs[_0x7f07fc(0x208)],
		_0x908055 = _0x4a5022['item'](currentScrollIndex + 0x1);
	if (_0x908055 == null)
		(_0x908055 = _0x4a5022[_0x7f07fc(0x1eb)](0x0)), (currentScrollIndex = 0x0);
	else currentScrollIndex++;
	_0x908055[_0x7f07fc(0x202)]({
		behavior: _0x7f07fc(0x1ce),
		block: _0x7f07fc(0x1d1),
		inline: _0x7f07fc(0x203),
	});
}
scrollToNextBtn[_0x1a06ec(0x1ed)](_0x1a06ec(0x1e9), (_0x2470ed) => {
	const _0x382a09 = _0x1a06ec;
	scrollToNext();
	if (
		promptImgs[_0x382a09(0x208)][_0x382a09(0x1f2)] - 0x1 ==
		currentScrollIndex
	)
		scrollToNextBtn[_0x382a09(0x1fd)][_0x382a09(0x1ef)]('rotate-[90deg]');
	else scrollToNextBtn['classList'][_0x382a09(0x1cb)]('rotate-[90deg]');
});
function togglePrompt(_0xeb932d, _0x4c7140, _0x559ee8, _0xa421d0) {
	const _0x3f4baf = _0x1a06ec;
	!promptObj['classList'][_0x3f4baf(0x1fe)](_0x3f4baf(0x207))
		? ((promptTitle[_0x3f4baf(0x1da)] = _0xeb932d),
		  (promptLink[_0x3f4baf(0x1ea)] = _0xa421d0),
		  (promptFullDesc[_0x3f4baf(0x1da)] = _0x4c7140),
		  _0x559ee8[_0x3f4baf(0x1ee)]((_0x8b05d) =>
				promptImgs[_0x3f4baf(0x1f3)](promptImg(_0x8b05d))
		  ))
		: ((promptTitle[_0x3f4baf(0x1da)] = ''),
		  (promptFullDesc[_0x3f4baf(0x1da)] = ''),
		  (promptImgs[_0x3f4baf(0x1e5)] = '')),
		promptObjOverlay['classList'][_0x3f4baf(0x1fa)](_0x3f4baf(0x1e0)),
		promptObj[_0x3f4baf(0x1fd)][_0x3f4baf(0x1fa)]('promptd'),
		promptBg['classList'][_0x3f4baf(0x1fa)](_0x3f4baf(0x1e6)),
		document[_0x3f4baf(0x1d3)]['classList'][_0x3f4baf(0x1fa)](_0x3f4baf(0x1c6));
}
document[_0x1a06ec(0x1ed)](_0x1a06ec(0x1e4), (_0x5cc07c) => {
	const _0x20b530 = _0x1a06ec;
	if (
		_0x5cc07c[_0x20b530(0x204)] == 'Escape' &&
		promptObj[_0x20b530(0x1fd)][_0x20b530(0x1fe)]('promptd')
	)
		togglePrompt();
}),
	promptObjOverlay[_0x1a06ec(0x1ed)](_0x1a06ec(0x1e9), (_0x4a0ead) => {
		const _0x4cca14 = _0x1a06ec;
		if (_0x4a0ead['target'] != promptObjOverlay) return;
		if (promptObj[_0x4cca14(0x1fd)]['contains'](_0x4cca14(0x207)))
			togglePrompt();
	}),
	feedbackr[_0x1a06ec(0x1ed)](_0x1a06ec(0x1e9), (_0x3cde49) => {
		const _0x1901bd = _0x1a06ec;
		togglePrompt(
			_0x1901bd(0x1c7),
			_0x1901bd(0x1f1),
			[
				_0x1901bd(0x1ec),
				'assets/img/feedbackr/panel-page.PNG',
				_0x1901bd(0x1fc),
			],
			_0x1901bd(0x1dd)
		);
	}),
	landingpagecopywriter[_0x1a06ec(0x1ed)](_0x1a06ec(0x1e9), (_0x3b99fe) => {
		const _0x111045 = _0x1a06ec;
		togglePrompt(
			'LandingPageCopywriter',
			'I\x20made\x20this\x20project\x20while\x20testing\x20the\x20Backend\x20As\x20a\x20Service\x20called\x20Firebase,\x20which\x27s\x20provided\x20by\x20google,\x20I\x20have\x20to\x20say,\x20the\x20workflow\x20and\x20implementation\x20was\x20smooth.\x0aCan\x20confidently\x20say\x20I\x20had\x20the\x20most\x20fun\x20making\x20this\x20project\x20as\x20I\x20didn\x27t\x20have\x20to\x20worry\x20about\x20a\x20lot\x20of\x20security\x20aspects\x20including\x20authentication\x20which\x20was\x20a\x20nightmare\x20to\x20me\x20at\x20the\x20time.',
			[
				'assets/img/landingpagecopywriter/landingpagecopywriter.live_.png',
				_0x111045(0x1f4),
				'assets/img/landingpagecopywriter/app.landingpagecopywriter.live_\x20(1).png',
			],
			_0x111045(0x205)
		);
	}),
	planifier[_0x1a06ec(0x1ed)](_0x1a06ec(0x1e9), (_0x387057) => {
		const _0x5f578b = _0x1a06ec;
		togglePrompt(
			_0x5f578b(0x200),
			_0x5f578b(0x1d5),
			[
				_0x5f578b(0x1d7),
				_0x5f578b(0x1d8),
				'assets/img/planifier/_D__SaaS_srs_Planifier_frontend_src_project_panel.html.png',
				_0x5f578b(0x1d2),
			],
			'https://github.com/orgs/Planifier/repositories'
		);
	}),
	scrolless[_0x1a06ec(0x1ed)](_0x1a06ec(0x1e9), (_0x110ce4) => {
		const _0x20d317 = _0x1a06ec;
		togglePrompt(
			_0x20d317(0x1ff),
			_0x20d317(0x201),
			[_0x20d317(0x1de)],
			_0x20d317(0x1f6)
		);
	}),
	magicbouton[_0x1a06ec(0x1ed)](_0x1a06ec(0x1e9), (_0x25edc6) => {
		const _0x396f93 = _0x1a06ec;
		togglePrompt(
			_0x396f93(0x1dc),
			'I\x20love\x20gradient\x20color\x20animations,\x20especially\x20on\x20buttons,\x20so\x20I\x20decided\x20to\x20create\x20this\x20little\x20component\x20library.\x0aThe\x20magic\x20behind\x20it\x20is\x20that\x20it\x20randomizes\x20its\x20theme\x20each\x20time\x20you\x20press\x20the\x20button.\x0aIt\x20makes\x20a\x20call\x20to\x20the\x20Color\x20Hunt\x20website,\x20grabs\x20the\x20website\x27s\x20title,\x20and\x20fetches\x20those\x20four\x20vibrant\x20colors\x20in\x20a\x20magical\x20way.\x0aI\x27m\x20really\x20proud\x20of\x20this\x20one.ors\x20in\x20some\x20magical\x20way.\x20I\x27m\x20really\x20proud\x20of\x20this\x20one.',
			[
				'assets/img/magicbouton/www.magicbouton.art_\x20(1).png',
				'assets/img/magicbouton/www.magicbouton.art_\x20(2).png',
				'assets/img/magicbouton/www.magicbouton.art_.png',
			],
			_0x396f93(0x1f5)
		);
	});
function _0x1442(_0x866a2c, _0x117910) {
	const _0x3884e6 = _0x3884();
	return (
		(_0x1442 = function (_0x144282, _0x322165) {
			_0x144282 = _0x144282 - 0x1c6;
			let _0x4adfeb = _0x3884e6[_0x144282];
			return _0x4adfeb;
		}),
		_0x1442(_0x866a2c, _0x117910)
	);
}
function _0x3884() {
	const _0x4a8b06 = [
		'1703259qgefBh',
		'MagicBouton',
		'https://www.feedbackr.live',
		'assets/img/scrolless/unnamed.jpg',
		'getElementById',
		'promptd-overlay',
		'magicbouton',
		'planifier',
		'promptTitle',
		'keyup',
		'innerHTML',
		'promptd-background',
		'168670VqBHsz',
		'scrollToNextBtn',
		'click',
		'href',
		'item',
		'assets/img/feedbackr/register-page.PNG',
		'addEventListener',
		'forEach',
		'add',
		'12247416KilKZA',
		'This\x20was\x20my\x20first\x20ever\x20serious\x20project,\x20I\x20thought\x20this\x20will\x20make\x20me\x20the\x20richest\x20man\x20on\x20the\x20planet,\x20until\x20I\x20got\x200\x20users...\x0aIn\x20fact\x20it\x20still\x20gets\x200\x20users\x20every\x20month,\x20but\x20as\x20they\x20say,\x20always\x20look\x20at\x20the\x20bright\x20side,\x20which\x20I\x20did,\x20and\x20the\x20bright\x20side\x20is\x20that\x20I\x20got\x20to\x20learn\x20&\x20harness\x20my\x20skills\x20even\x20stronger!\x0aI\x27m\x20really\x20proud\x20of\x20Feedbackr.',
		'length',
		'appendChild',
		'assets/img/landingpagecopywriter/app.landingpagecopywriter.live_.png',
		'https://www.magicbouton.art/',
		'https://chromewebstore.google.com/detail/scrolless/apmedmhgebkhdkbkaimpjdbahgpcbjop',
		'promptObj',
		'src',
		'img',
		'toggle',
		'landingpagecopywriter',
		'assets/img/feedbackr/feedback_submit.PNG',
		'classList',
		'contains',
		'Scrolless',
		'Planifier',
		'This\x20solution\x20is\x20for\x20those\x20who\x20find\x20themselves\x20procrastinating\x20excessively\x20on\x20social\x20media\x20and\x20making\x20little\x20to\x20no\x20progress\x20throughout\x20the\x20day.\x20You\x20get\x20an\x20hour\x20of\x20social\x20media\x20time\x20per\x20day,\x20and\x20once\x20that\x20time\x20is\x20up,\x20access\x20to\x20those\x20dopamine-driven\x20platforms\x20is\x20restricted.\x20You\x20can\x20earn\x20more\x20time\x20by\x20staying\x20off\x20websites\x20like\x20Instagram,\x20Facebook,\x20TikTok,\x20and\x20YouTube\x20Shorts;\x20for\x20every\x20second\x20you\x20avoid\x20them,\x20you\x20gain\x20an\x20additional\x20quarter-second\x20of\x20usage\x20time.',
		'scrollIntoView',
		'nearest',
		'key',
		'https://www.landingpagecopywriter.live',
		'2842158GvEYnN',
		'promptd',
		'children',
		'overflow-clip',
		'Feedbackr',
		'scrolless',
		'createElement',
		'1177614TGeQyF',
		'remove',
		'120rhhaOw',
		'253193ucLdcN',
		'smooth',
		'promptBg',
		'2oNxefA',
		'end',
		'assets/img/planifier/_D__SaaS_srs_Planifier_frontend_src_project_team_panel.html.png',
		'body',
		'promptImgs',
		'This\x20project\x20was\x20intended\x20to\x20be\x20another\x20SaaS\x20Startup\x20thing,\x20but\x20then\x20reality\x20hit\x20and\x20I\x20realized\x20that\x20there\x20are\x20already\x20products\x20that\x20have\x20been\x20worked\x20on\x20for\x20YEARS\x20and\x20provide\x20the\x20exact\x20same\x20if\x20not\x20a\x20ten\x20times\x20better\x20functionality\x20than\x20this\x20project,\x20something\x20like\x20Slack.\x20\x0aSo\x20I\x20just\x20instantly\x20stopped\x20working\x20on\x20it\x20and\x20moved\x20on.\x20Again,\x20was\x20a\x20very\x20great\x20learning\x20&\x20growth\x20opportunity\x20nonetheless.',
		'3178749sArawK',
		'assets/img/planifier/_D__SaaS_srs_Planifier_frontend_src_panel.html.png',
		'assets/img/planifier/_D__SaaS_srs_Planifier_frontend_src_project_panel.html\x20(1).png',
		'feedbackr',
		'textContent',
	];
	_0x3884 = function () {
		return _0x4a8b06;
	};
	return _0x3884();
}
