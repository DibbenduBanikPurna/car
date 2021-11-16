const CarData = [
    {
        id: 1,
        name: 'Ferrari LaFerrari',
        Price: '$1.4 Million',
        desc: 'At $1.4 million new, the Ferrari LaFerrari is actually one of the most affordable supercars on this list. It’s a bargain compared to the most expensive vehicle here. Debuting in 2013 with 950 hybrid horses (708 kilowatts) and a top speed of around 220 miles per hour (354 kilometers per hour), this is still Ferrari’s fastest and most powerful production model to date. The company built just 499 examples of the coupe between 2013 and 2016.',
        img: 'https://cdn.motor1.com/images/mgl/2PgYn/s1/ferrari-laferrari.webp'

    },

    {
        id: 2,
        name: 'Pagani Huayra',
        Price: '$1.4 Million',
        desc: 'Inarguably one of the prettiest cars on this list, the Pagani Huayra cost a cool $1.4 million when new. Like the LaFerrari, Pagani built the Huayra in extremely limited numbers. The company hand-constructed just 100 units of the coupe between 2012 and 2018, with another 20 versions of the BC model (which makes our list further down) between 2017 and 2019. Powering each and every example was a Mercedes-AMG V12 capable of 720 horsepower (537 kilowatts).',
        img: 'https://cdn.motor1.com/images/mgl/39ygL/s1/pagani-huayra.webp'

    },
    {
        id: 3,
        name: 'McLaren Elva',
        Price: '$1.7 Million',
        desc: 'The McLaren Elva is one of the latest additions to the British supercar maker’s storied legacy. Even without a proper windshield (though, no option) or roof to rely on, the Elva produces 804 horsepower and 590 pound-feet of torque from its twin-turbocharged 4.0-liter V8. Originally McLaren announced just 399 units, but later the company dropped that to an even more scarce 249 examples. Either way, most of you will never get your hands on one – the Elva costs $1.7 million.',

        img: 'https://cdn.motor1.com/images/mgl/XPWO2/s1/mclaren-elva.webp'
    },

    {
        id: 4,
        name: 'Ferrari Monza',
        Price: '$1.7 Million',
        desc: 'Much like the roof-less McLaren Elva, the Ferrari Monza SP1 and SP2 are all about al fresco motoring. As the name implies, the SP1 is the single-seater option while the SP2 has just enough room for you to bring along a friend. Both cars come powered by the same naturally aspirated 6.5-liter V12 engine capable of 809 horsepower and 530 pound-feet. Unfortunately for US buyers, neither of these models are street legal in the States. But f you have the funds to afford the car’s $1.75 million price tag, getting onto a track probably won’t be an issue anyway.',
        img: 'https://cdn.motor1.com/images/mgl/7ypK7/s1/ferrari-monza-sp1.webp'
    },


    {
        id: 5,

        name: 'Bentley Bacalar',

        Price: '$1.9 Million',
        desc: 'With just 12 total units produced, the Bentley Bacalar makes some of the "limited" cars on this list look plentiful by comparison. Although the car’s opulent design may be the first thing to grab your attention, the Bacalar is no slouch in terms of performance either. With Bentley’s signature turbocharged 6.0-liter W12 turbocharged engine, this car delivers 650 horsepower and 664 pound-feet. If you have a spare $1.9 million lying around and are considering buying one, you’re already too late – Bentley says that every example is now in customer hands.',
        img: 'https://cdn.motor1.com/images/mgl/JPGqE/s1/bentley-bacalar.webp'
    },


    {
        id: 6,
        name: 'Pininfarina Battista',
        Price: '$2.5 Million',
        desc: 'Aptly named after the company’s founder, Battista Farina, the Pininfarina Battista delivers the kind of performance (and price!) to make its namesake proud. Revealed at the 2019 Geneva Motor Show, the Battista is completely electric, putting out 1,827 horsepower. If a normal supercar’s 0 to 60 time sounds too leisurely for you, the company says that the Battista will take you there in under 2.0 seconds. Pininfarina plans on building 150 examples of the Battista, costing $2.5 million each.',
        img: 'https://cdn.motor1.com/images/mgl/pv2vv/s1/pininfarina-battista.webp',
    },
    {
        id: 7,
        name: 'Mercedes-AMG Project One',
        Price: '$2.7 Million',
        desc: 'Mercedes has promised a production version of the Project One hypercar for quite a while now. The first official announcement was in March of 2017 before the first concept debuted later that same year. But after nearly five years of teasing, it appears as if the Project One will finally hit public roads. And when it does, the hybrid hypercar will have over 1,200 horsepower (895 kilowatts) and a price tag of $2.7 million.',
        img: 'https://cdn.motor1.com/images/mgl/x67Gw/s1/mercedes-amg-project-one.webp',
    },
    {

        id: 8,
        name: 'Aston Martin Victor',

        Price: '$3.0 Million',
        desc: 'The folks at Aston Martin know a thing or two about exclusive vehicles, and the Victor might be the most exclusive project for the British brand to date. Based on the One-77 platform, the Victor uses parts from several donor Astons including the track project Vulcan and the upcoming Valkyrie. And talking about limited production – the Victor is one-of-one and rumored to cost nearly $3 million.',
        img: 'https://cdn.motor1.com/images/mgl/WmLWo/s1/aston-martin-victor-static.webp',
    },



    {
        id: 9,
        name: 'Bugatti Bolide',
        Price: '$3.0 Million',
        desc: 'Although it’s certainly the wildest-looking Bugatti on this list, the Bolide actually isn’t the most expensive. The Bugatti Bolide costs a very reasonable $3.0 million, offering the same 1,479 horsepower (1,102 kilowatts) from the company’s iconic 8.0-liter W16 engine. But, this is a track-only special offered in very limited production.',
        img: 'https://cdn.motor1.com/images/mgl/3OkQ1/s1/aston-martin-valkyrie.webp',
    },
    {
        id: 10,
        Price: '$12.0 Million',
        name: 'Bugatti Chiron Pur Sport',
        desc: 'Another showstopper from the Geneva Motor Show that never was, the Bugatti Chiron Pur Sport is a special edition Chiron with a focus on aerodynamics, weight reduction, and power distribution. It’s the same 8.0-liter quad-turbo W16 engine underneath the skin but it’s now mated to a recalibrated automatic gearbox. While the peak output remains unchanged at 1,500 horsepower (1,103 kilowatts), the rpm redline has been set 200 rpm higher, up to 6,900 rpm. The Pur Sport also features slightly revised bodywork, with a bigger rear wing and more aerodynamic front fascia. Beginning production in late 2020, the Bugatti starts at $3.6 million.',
        img: 'https://cdn.motor1.com/images/mgl/q4z9v/s1/bugatti-chiron-pur-sport.webp',

    },

]
export default CarData;