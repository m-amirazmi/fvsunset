window.onbeforeunload = () => {
	window.scrollTo(0, 0);
};

window.onload = () => {
	gsap.registerPlugin(ScrollTrigger);

	const breakpoints = {
		mobile: 576,
	};

	if (screen.width < breakpoints.mobile) {
		animateMobile();
	} else {
		animate();
	}
};

const animateMobile = () => {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: 'main',
			start: 'top 0%',
			end: 'bottom 0%',
			markers: true,
			scrub: 1,
			pin: true,
		},
	});

	tl.to('#sun .sun-img', {
		x: '-85vw',
		duration: 40,
		ease: Power0.easeNone,
	});

	tl.fromTo(
		'#intro .intro-text',
		{
			y: '40vh',
			autoAlpha: 0,
		},
		{
			y: 0,
			duration: 50,
			ease: Power0.easeNone,
			autoAlpha: 1,
		},
		'<+0.5'
	);

	tl.to('#intro .intro-text', {
		autoAlpha: 0,
		y: '-20vh',
		duration: 50,
		ease: Power0.easeNone,
	});

	tl.to(
		'#sun .sun-img',
		{
			x: 0,
			delay: 10,
			duration: 30,
			ease: Power0.easeNone,
		},
		'<+2'
	);

	tl.to('#bg', {
		y: '80vh',
		duration: 20,
		ease: Power0.easeNone,
	});

	tl.to('#bg', {
		y: '-45vh',
		duration: 50,
		ease: Power0.easeNone,
	});

	tl.to('#sun .sun-img', {
		height: '45vw',
		y: '-100px',
		duration: 30,
		ease: Power0.easeNone,
	});

	tl.to(
		'#inspired p',
		{
			autoAlpha: 1,
			y: 8,
			duration: 30,
			ease: Power0.easeNone,
		},
		'<+1'
	);

	tl.to('#bg', {
		y: '-125vh',
		duration: 70,
		ease: Power0.easeNone,
		delay: 30,
	});

	tl.to(
		'#sun .sun-img',
		{
			y: '-120vh',
			duration: 50,
			ease: Power0.easeNone,
		},
		'<'
	);

	tl.to(
		'#inspired p',
		{
			y: '-100vh',
			duration: 50,
			ease: Power0.easeNone,
		},
		'<'
	);

	const introducing = document.querySelectorAll('.introducing');
	introducing.forEach((intro, i) => {
		const introTl = gsap.timeline();
		introTl.fromTo(
			intro,
			{
				autoAlpha: 0,
				y: '30vh',
			},
			{
				autoAlpha: 1,
				y: 0,
				duration: 50,
				delay: 10,
			},
			'>+2'
		);

		introTl.to(intro, {
			autoAlpha: 0,
			y: '-10vh',
			duration: 50,
			delay: 30,
		});

		tl.add(introTl, '>+1.5');
	});
};

const animate = () => {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: 'main',
			start: 'top 0%',
			end: 'bottom 0%',
			markers: true,
			scrub: 50,
			pin: true,
		},
	});
	tl.to('#sun .sun-img', {
		x: '-50vw',
		duration: 10,
		ease: Power0.easeNone,
	});

	tl.to('#sun .sun-img', {
		x: 0,
		duration: 10,
		ease: Power0.easeNone,
	});
};
