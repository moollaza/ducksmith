const contentful = require('contentful-management')

const client = contentful.createClient({
  accessToken: '70451f8b38cc2e1ab4e1d383c5a49d17c0383ddaa6c8b7eb246fdca7808174ed'
})

client.getSpace('u62yu01xthvz')
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '09/25/2008',
        title: 'Launch!',
        text: 'Within the year, DuckDuckGo was announced to the Hacker News and reddit communities. We made it out with only minor troll scars.',
        type: 'news',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '01/22/2009',
        title: 'Anonymous',
        text: 'We decided to make a bold move and not track your search history. Tracking is creepy.',
        type: 'news',
        year: 2009,
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '01/11/2011',
        title: 'The Billboard',
        text: 'We told the world “Google tracks you. We don’t.” with a billboard in their backyard. Hello, World!',
        type: 'news',
        year: 2011,
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '02/26/2011',
        title: '2011 Donations',
        text: 'We rely on a lot of great projects to keep our wings flapping. So we decided to start giving back, donating to nginx, FreeBSD, Tor Project, Clamwin, Tahoe-LAFS and OpenSSH.',
        type: 'company',
        subtype: 'foss',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '11/30/2011',
        title: 'Employee #1',
        text: 'For years our founder Gabriel was the only full-timer. Caine Tighe changed all that, coming on board as our first official employee.',
        type: 'company',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '12/1/2011',
        title: 'Headquarters',
        text: 'We finally moved out of Gabriel’s basement into our fortress in Paoli, PA. It really looks like a castle!',
        type: 'company',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '01/16/2012',
        title: 'Redesign',
        text: 'Our first major visual overhaul introduced a new design that made you not want to close your browser the second you saw our results page. ',
        type: 'news',
        year: 2012,
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '02/13/2012',
        title: '1,000,000!',
        text: 'Reaching 1 million searches a day was a major milestone for us, having steadily grown from 100 to 1,000 to 10,000 to 100,000 and finally to 1,000,000. That’s more than 10 searches a second!',
        type: 'traffic',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '03/7,/012',
        title: '2012 Donations',
        text: 'For our second year of donations we chose the theme “open data/information,” donating to Tor, The Wikimedia Foundation, unhosted.org, Diaspora, Freenet, and friendica.',
        type: 'company',
        subtype: 'foss',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '02/25/2013',
        title: '2013 Donations',
        text: 'The theme for our third year of donations was “fix tracking,” with donations to OpenStreetMap, the Electronic Frontier Foundation, Riseup, F-Droid, NoScript, Cryptocat, and Javascript Blocker. ',
        type: 'company',
        subtype: 'foss',
        year: 2013,
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '06/10/2013',
        title: '2,000,000',
        text: '483 days after reaching one million, we doubled our daily searches. This milestone happened days after people started sharing private alternatives (like us) in the wake of the NSA revelations. ',
        type: 'traffic',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '06/17/2013',
        title: '3,000,000',
        text: 'Just eight days after hitting two million searches per day, we added another million. To put this in perspective, it took 1,445 days to get to one million from the day we launched.',
        type: 'traffic',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '03/12/2014',
        title: '2014 Donations',
        text: 'Needed more than ever, our 2014 donation theme was “secure communications,” donating to SecureDrop, NoiseTor, Lavabit, Riseup, Mailpile, and the Invisible Internet Project.',
        type: 'company',
        subtype: 'foss',
        year: 2014,
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '03/17/2014',
        title: 'Employee #10',
        text: 'The big guys have thousands more employees than us, and so everyone at DuckDuckGo is an essential member of the team. Welcome Brian Stoner!',
        type: 'company',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '05/1/2014',
        title: 'Reimagined',
        text: "DuckDuckGo launches a redesigned search engine with a refined look and a focus on smarter answers. And, of course, we still don't track you.",
        type: 'company',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '09/17/2014',
        title: 'Safari',
        text: 'Apple begins including DuckDuckGo in Safari, with the launch of iOS 8 and OS X Yosemite. Wow, cool!',
        type: 'company',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '11/10/2014',
        title: 'Firefox',
        text: "Mozilla adds DuckDuckGo as a built-in search option to Firefox. Thank you! Do you think we’ll ever get into Chrome? Don't hold your breath.",
        type: 'company',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '03/20/2015',
        title: '2015 Donations',
        text: 'In our fifth donation year, we divided $125,000 equally over five projects: SecureDrop, Privacy Badger, GPGTools, Tails, and Girl Develop It.',
        type: 'company',
        subtype: 'foss',
        year: 2015,
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '06/22/2015',
        title: '10,000,000',
        text: 'Boom! 10 million searches in a single day (10,210,082 to be exact). To celebrate, we gave away a ton of DuckDuckGo T-shirts!',
        type: 'traffic',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '05/3/2016',
        title: '2016 Donations',
        text: 'We divided $225,000 equally over nine projects: SecureDrop, Freenet, OpenBSD Foundation, CrypTech, Tor Project, Fight for the Future, VeraCrypt, LEAP, GPGTools.',
        type: 'company',
        subtype: 'foss',
        year: 2016,
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '12/31/2016',
        title: '10 Billion Searches!',
        text: 'We concluded 2016 with over four billion anonymous searches served, surpassing a cumulative count of ten billion!',
        type: 'traffic',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '02/10/2017',
        title: '2017 Donations',
        text: 'We divided $400,000 over sixteen projects including: Freedom of the Press Foundation, World Privacy Forum, Open Whisper Systems, Privacy Rights Clearinghouse, Tor Project and the Electronic Frontier Foundation.',
        type: 'company',
        subtype: 'foss',
        year: 2017,
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '11/13/2017',
        title: '20,000,000',
        text: 'Over 20 million searches in a single day. Privacy is mainstream and more and more privacy conscious people have #ComeToTheDuckSide.',
        type: 'traffic',
    }
}))
.then((space) => space.createEntry('timelineEvent', {
    fields: {
        date: '01/23/2018',
        title: 'Protection Beyond Search',
        text: 'We extended our privacy protection beyond the search box with the launch of our new mobile app & browser extension, available on all major platforms.',
        type: 'priacy',
        year: 2018,
    }
}))
.then((entry) => console.log(entry))
.catch(console.error)
