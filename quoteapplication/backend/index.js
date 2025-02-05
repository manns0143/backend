import express from 'express'

const app = express()

const himymQuotes = [
    { id: 1, title: 'line 1', content: 'Whenever I’m sad, I stop being sad and be awesome instead.' },
    { id: 2, title: 'line 2', content: 'It’s just, eventually, we’re all gonna move on. It’s called growing up.' },
    { id: 3, title: 'line 3', content: 'The future is scary, but you can’t just run back to the past because it’s familiar. Yes, it’s tempting, but it’s a mistake.' },
    { id: 4, title: 'line 4', content: 'That cake. Best cake I ever had. Seriously, my stomach was like, ‘Hey bro, I don’t know what you’re eating cause I don’t have any eyes but it’s basically awesome, so keep sending it down Gullet Alley.’' },
    { id: 5, title: 'line 5', content: 'Everyone has an opinion on how long it takes to recover from a breakup.' },
    { id: 6, title: 'line 6', content: 'I realized that I’m searching, searching for what I really want in life. And you know what? I have absolutely no idea what that is.' },
    { id: 7, title: 'line 7', content: 'Because sometimes even if you know how something’s gonna end, that doesn’t mean you can’t enjoy the ride.' },
    { id: 8, title: 'line 8', content: 'That’s life, you know. We never end up where you thought you wanted to be.' },
    { id: 9, title: 'line 9', content: 'Oh my god, look at you cowards. So afraid of any kind of change. So terrified of anything new. So, so desperate to cling to anything comfortable and familiar.' },
    { id: 10, title: 'line 10', content: 'A lie is just a great story that someone ruined with the truth.' },
    { id: 11, title: 'line 11', content: 'The three-day rule is a childish, manipulative mind game. But yeah, you wait three days.' },
    { id: 12, title: 'line 12', content: 'I get recognized one time, and I start thinking I’m Julia Roberts. I’m no VIP; I’m not even an IP; I’m just a lonely little P sitting out here in the gutter.' },
    { id: 13, title: 'line 13', content: 'Every Halloween, I bring a spare costume, in case I strike out with the hottest girl at the party. That way, I have a second chance to make a first impression.' },
    { id: 14, title: 'line 14', content: 'Revenge fantasies never work out the way you want.' },
    { id: 15, title: 'line 15', content: 'So really the biggest mistake would be not to make that mistake, because then you’ll go your whole life not knowing if something was a mistake or not.' },
    { id: 16, title: 'line 16', content: 'I finally found the one, Marshall. Her name is Bacon.' },
    { id: 17, title: 'line 17', content: 'The best I can give you is a fake smile and dead eyes.' },
    { id: 18, title: 'line 18', content: 'I’ve never asked Lily to do anything ‘no questions asked’ because I never wanted to. She’s the love of my life. I never keep anything from her.' },
    { id: 19, title: 'line 19', content: 'Your package has always been big enough. You may not realize this, Marshall Eriksen, but you’ve got a huge package.' },
    { id: 20, title: 'line 20', content: 'Look, I know the odds are the love of my life isn’t going to magically walk through that door in a pumpkin costume at 2:43 in the morning. But it just seems as nice a spot as any to just, you know, sit and wait.' },
    { id: 21, title: 'line 21', content: 'I don’t wanna get married right now, maybe ever, and if we got together, I’d feel like I’d either have to marry you or break your heart, and I just couldn’t do either of those things. Just like you can’t turn off the way you feel.' },
    { id: 22, title: 'line 22', content: 'Somewhere along the line, I forgot to pursue my dream, and now I’m old, and I’m a mom, and it’s just too late for me.' },
    { id: 23, title: 'line 23', content: 'Whether a gesture’s charming or alarming depends on how it’s received.' },
    { id: 24, title: 'line 24', content: 'Lily, there are a million reasons why I love you. You make me laugh, you take care of me when I’m sick, you’re sweet, caring and you even created an egg dish and named it after me. She puts a little Italian dressing on the eggs before she cooks them, it’s called Eggs Marshall and it’s awesome. But the main reason is you’re my best friend, Lily. You’re the best friend I’ve ever had.' },
    { id: 25, title: 'line 25', content: 'If I ask you to change too many things about yourself, you’re not gonna be the man I fell in love with. Turns out I accept and appreciate even the grossest, creepiest, most sociopathic parts of you.' },
    { id: 26, title: 'line 26', content: 'Maybe this isn’t a breakup. Maybe this is just two friends getting back together.' },
    { id: 27, title: 'line 27', content: 'Definitions are important.' },
    { id: 28, title: 'line 28', content: 'I really don’t like feelings.' },
    { id: 29, title: 'line 29', content: 'I’m cuddly. Deal with it.' },
    { id: 30, title: 'line 30', content: 'The only reason to wait a month for sex is if she’s 17 years, 11 months old.' },
    { id: 31, title: 'line 31', content: 'Shouldn’t we hold out for the person who doesn’t just tolerate our little quirks, but actually kind of likes them?' },
    { id: 32, title: 'line 32', content: 'We spend an hour arguing about where to eat, and we end up here, anyway. I haven’t eaten for two days. Can we please, for the love of God, just order something now?' },
    { id: 33, title: 'line 33', content: 'I’m a good boyfriend in my sleep.' },
    { id: 34, title: 'line 34', content: 'Believe it or not, I was not always as awesome as I am today.' },
    { id: 35, title: 'line 35', content: 'Some couples always support each other, and some couples always challenge each other. But is one really better than the other? Yes. Support is better. Way better.' },
    { id: 36, title: 'line 36', content: 'In marriage, being right is less important than being supportive. Remember: Happy wife equals happy life.' },
    { id: 37, title: 'line 37', content: 'I don’t know where I’m gonna be in five years. I don’t wanna know. I want my life to be an adventure.' },
    { id: 38, title: 'line 38', content: 'You have to let me dance my own battles.' },
    { id: 39, title: 'line 39', content: 'I used to be in such a hurry all the time. Everything was so urgent. Now I figure, if it’s going to happen, it’ll happen when it happens. I’m not going anywhere; she’s not going anywhere. What’s the rush, right?' },
    { id: 40, title: 'line 40', content: 'You know what Marshall needs to do. He needs to stop being sad. When I get sad, I stop being sad and be awesome instead. True story.' },
    { id: 41, title: 'line 41', content: 'Oprah wasn’t built in a day.' },
    { id: 42, title: 'line 42', content: 'If you keep giving up on people so quickly, you’re gonna miss out on something great.' },
    { id: 43, title: 'line 43', content: 'You will be shocked, kids, when you discover how easy it is in life to part ways with people forever. That’s why, when you find someone you want to keep around, you do something about it.' },
    { id: 44, title: 'line 44', content: 'Death is all around us.' },
    { id: 45, title: 'line 45', content: 'Article 24: “When wearing a baseball cap, a Bro may position the brim at either 12 or 6 o’clock. All other angles are reserved for rappers and the handicapped.”' },
    { id: 46, title: 'line 46', content: 'The more you fight it, the worse it’s gonna get. It’s like when your car slides on ice, you stir into the skid.' },
    { id: 47, title: 'line 47', content: 'I just want to say from the bottom of my heart… I’m going to kill you.' },
    { id: 48, title: 'line 48', content: 'You’re my best friend. I don’t need objectivity. I just need your support.' },
    { id: 49, title: 'line 49', content: 'I thought I saw Big Foot in the park, so I tackled him.' },
    { id: 50, title: 'line 50', content: 'Kids, when you’re in a new relationship and you’re competing with your ex for who’s happier, it can get ugly.' },
    { id: 51, title: 'line 51', content: 'Say goodbye to all the times you felt lost, to all the times it was a No instead of a Yes, to all the scrapes and bruises, to all the heartache.' },
    { id: 52, title: 'line 52', content: 'That was the night I was born. I rose like a phoenix from her mentholated bosom and strode into the world, Armani-clad and fully awesome.' },
    { id: 53, title: 'line 53', content: 'I never wanted that… Of course, it’s one thing not to want something; it’s another to be told you can’t have it. I guess it’s just nice knowing that you could someday do it if you change your mind. But now, all of a sudden, that door is closed.' },
    { id: 54, title: 'line 54', content: 'I’m sorry, when I’m excited I abbreviate words I shouldn’t.' },
    { id: 55, title: 'line 55', content: 'All hail Beercules!' },
    { id: 56, title: 'line 56', content: 'You’re in your 40s and you have a playbook. That’s the sad part.' },
    { id: 57, title: 'line 57', content: 'It’s time to let go of the fantasies. It’s time to grow up.' },
    { id: 58, title: 'line 58', content: 'Why am I constantly looking for reasons not to be happy?' },
    { id: 59, title: 'line 59', content: 'Dude… where’s your suit? Just once, when I say “suit up,” I wish you’d put on a suit.' },
    { id: 60, title: 'line 60', content: 'Happy Slapsgiving!' },
    { id: 61, title: 'line 61', content: 'You can’t just skip ahead to where you think your life should be.' },
    { id: 62, title: 'line 62', content: 'If you have chemistry, all you need is one other thing — timing. But timing’s a bitch.' },
    { id: 63, title: 'line 63', content: 'You can ask the universe for signs all you want, but ultimately we’ll only see what we want to see… when we’re ready to see it.' },
    { id: 64, title: 'line 64', content: 'ARTICLE 41 A Bro never cries. EXCEPTIONS: Watching Field of Dreams, E.T., or a sports legend retire.*' },
    { id: 65, title: 'line 65', content: 'Well, that answers all the questions I didn’t ask.' },
    { id: 66, title: 'line 66', content: 'That’s love, bitch.' },
    { id: 67, title: 'line 67', content: 'The great moments of your life won’t necessarily be the things you do, they’ll also be the things that happen to you.' },
    { id: 68, title: 'line 68', content: 'That’s right, I’m a ghost. I died fifteen years ago, kind of like that pickup line.' },
    { id: 69, title: 'line 69', content: 'I’ve been dreaming of that since I was five. Well, that and my own operational Death Star.' },
    { id: 70, title: 'line 70', content: 'Why say goodbye to the good things?' },
    { id: 71, title: 'line 71', content: 'Here’s the secret kids. None of us can vow to be perfect. In the end, all we can do is promise to love each other with everything we’ve got. Because love’s the best thing we do.' },
    { id: 72, title: 'line 72', content: 'I love being the person you bitch to.' },
    { id: 73, title: 'line 73', content: 'Whatever you do in this life, it’s not legendary, unless your friends are there to see it.' },
    { id: 74, title: 'line 74', content: 'I got a two-syllable ‘damn’ in this dress.' },
    { id: 75, title: 'line 75', content: 'It’s funny, sometimes you walk into a place, you know you’re exactly where you’re supposed to be.' },
    { id: 76, title: 'line 76', content: 'Nobody asked you, Patrice!' },
    { id: 77, title: 'line 77', content: 'Canada also helped in two world wars and gave the world Neil Young, William Shatner, Leonard Cohen, Pamela Anderson, one-quarter of Barney Stinson, instant mashed potatoes and best of all — you.' },
    { id: 78, title: 'line 78', content: 'Yeah, I wasn’t really listening either. Ted can really go on about a bitch.' },
    { id: 79, title: 'line 79', content: 'I’m from Minnesota, where there’s plenty of hot-dogs for everyone. Perhaps even too many…' },
    { id: 80, title: 'line 80', content: 'Here’s the thing about mistakes: Sometimes, even when you know something’s a mistake, you gotta make it anyway.' },
    { id: 81, title: 'line 81', content: 'Oh, come on, ref! I haven’t seen that much hooking go unpunished since my last trip to Vegas.' },
    { id: 82, title: 'line 82', content: 'Your story is so sweet. You didn’t even kiss ’til the third date. By our third date, I hit more bases than Bob Hope on a USO tour.' },
    { id: 83, title: 'line 83', content: 'Look, you can’t design your life like a building. You just have to live it…and it’ll design itself.' },
    { id: 84, title: 'line 84', content: 'Italy doesn’t need something that is wrinkled, red and leaky, and smells like booze and narcotics. They’ve already got former Prime Minister Silvio Berlusconi.' },
    { id: 85, title: 'line 85', content: 'There are two big days in any love story… the day you meet the girl of your dreams… and the day you marry her.' },
    { id: 86, title: 'line 86', content: 'My metabolism is all messed up. See, I can moose down a pint of fudge ripple for a midnight snack and wake up having lost weight. Well, everywhere except for my boobs. So annoying.' },
    { id: 87, title: 'line 87', content: 'Every hookup at a weekend wedding is decided at Friday Night Drinks. Get stuck with the wrong girl tonight, the only action you’ll be getting all weekend is a self five, and I don’t mean the cool kind. Self-five! That’s the cool kind.' },
    { id: 88, title: 'line 88', content: 'The ‘no more surprises’-thing is the best part of being married.' },
    { id: 89, title: 'line 89', content: 'The biggest case of my life and I’d already lost the jury. I mean, I’ve heard of Twelve Angry Men, but this was more like ‘Twelve Horny Women.' },
    { id: 90, title: 'line 90', content: 'If you’re not scared, then you’re not taking a chance. If you’re not taking a chance, then what the hell are you doing anyway?' },
    { id: 91, title: 'line 91', content: 'By ‘entertainment’ they mean ‘table-shuffle-board’, macramé classes and other non-stimulating activities which are only used in Manhattan to calm down drug-addicts and the criminally insane.' },
    { id: 92, title: 'line 92', content: 'I’m also pleased to announce The Bro Code is now available in select airlines across the country. And Lufthansa. ‘Der Bro Code’ is, like, huge in Germany.' },
    { id: 93, title: 'line 93', content: 'Yes, I’m in a rotten mood. No, I don’t want to talk about it. Yes, this has booze in it. No, it’s not my first.' },
    { id: 94, title: 'line 94', content: 'One good deed leads to another and another.' },
    { id: 95, title: 'line 95', content: 'Love doesn’t make sense. I mean, you can’t logic your way into or out of it. Love is totally nonsensical, but we have to keep doing it or else we’re lost and love is dead and humanity should just pack it in. Because love is the best thing we do.' },
    { id: 96, title: 'line 96', content: 'Destined? Aren’t you tired of waiting for destiny, Ted? Isn’t it time to make your own destiny?' },
    { id: 97, title: 'line 97', content: 'The Bro Code has been around for centuries. Nay… whatever’s more than centuries.' },
    { id: 98, title: 'line 98', content: 'Sometimes we search for one thing, but discover another.' },
    { id: 99, title: 'line 99', content: 'But love doesn’t make sense. You can’t logic your way into or out of it. Love is totally nonsensical. But we have to keep doing it or else we’re lost and love is dead and humanity should just pack it in. Because love is the biggest thing we do.' },
    { id: 100, title: 'line 100', content: 'I’ve just been handed a news flash, the word Canada is unrhymable. It’s easier to, I don’t know, get drunk and try to climb a bull. But Canada damn it, Ask any man on the planet And watch his stammerin’ stamina. As they clamor and cram it into the middle of a sentence, For a shot at repentance, Pass the problem on to all their nonrhyming descendants. I’ve never met anyone who could clean up after Canada Except my uncle Tony from the Bronx He’s a janitor.' },
    { id: 101, title: 'line 101', content: 'I know it’s a mistake, but there are certain things in life where you know it’s a mistake, but you don’t really know it’s a mistake, because the only way to really know it’s a mistake is to make the mistake, and look back and say, ‘Yep, that was a mistake.’ So, really, the bigger mistake would be to not make the mistake because then you’d go your whole life not really knowing if something is a mistake or not.' },
    { id: 102, title: 'line 102', content: 'If you’re looking for a word that means caring about someone beyond all rationality and wanting them to have everything they want, no matter how much it destroys you, it’s ‘love.’' },
    { id: 103, title: 'line 103', content: 'It’s not about proof; it’s about faith. Faith is what gives life shape and meaning.' },
    { id: 104, title: 'line 104', content: 'I am Canadian, remember? We celebrate Thanksgiving in October.' },
    { id: 105, title: 'line 105', content: 'Oh right, I forgot. You guys are weird and you pronounce the word ‘out’, ‘oot.’' },
    { id: 106, title: 'line 106', content: 'Look at us, riding around in a limo, eating hot dogs. It’s like we’re the president.' },
    { id: 107, title: 'line 107', content: 'We struggle so hard to hold on to these things that we know are gonna disappear, eventually. And that’s really noble.' },
    { id: 108, title: 'line 108', content: 'It’s going to be legen — wait for it — and I hope you’re not lactose intolerant, because the second half of the word is — dary! Legendary!' },
    { id: 109, title: 'line 109', content: 'Just like Ryan Gosling in The Notebook. It was pretty manly ’til I mentioned Ryan Gosling in The Notebook, huh?' },
    { id: 110, title: 'line 110', content: 'You can ask the universe for signs all you want, but, ultimately, we’ll only see what we want to see. When we’re ready to see it.' },
    { id: 111, title: 'line 111', content: 'Nothing good happens after 2 a.m. When 2 a.m. rolls around, just go home and go to sleep.' },
    { id: 112, title: 'line 112', content: 'Sorry, Peter. We’re grown-ups now, we can’t fly to Neverland with you anymore.' },
    { id: 113, title: 'line 113', content: 'I wound up shame-eating the whole pizza. I woke up all greasy and sweaty. My sheets looked like what they wrap deli sandwiches in. Maybe I should join a gym. Do you go to a gym?' },
    { id: 114, title: 'line 114', content: 'Robin: ‘I’m such a mess. Why do you even like me?’ Barney: ‘I guess, because you’re almost as messed up as I am.’' },
    { id: 115, title: 'line 115', content: 'Barney: ‘You’re the most awesome person I’ve ever met. Well, second.’ Robin: ‘Right, first being you.’ Barney: ‘No, actually, it’s this guy I know who lives in something called the mirror.’' },
    { id: 116, title: 'line 116', content: 'Eight years ago, I made an ass of myself chasing after you, and I made an ass of myself chasing after you a bunch of times since then. I have no regrets because it led me to something I wouldn’t trade for the world; it led to you being my friend. So, as your friend and a leading expert in the field of making an ass of yourself, I say to you, from the heart, get the hell out of this car.' },
    { id: 117, title: 'line 117', content: 'OK, here’s my thing — if gay guys start getting married, then suddenly the whole world’s gonna be doing it. That’s how it works: They start something, then six months later, everyone follows. Like… now everyone gets manicures.' },
    { id: 118, title: 'line 118', content: 'There’s three rules of cheating: One — it’s not cheating if you’re not the one who’s married. Two — it’s not cheating if her name has two adjacent vowels. Three — and it’s not cheating if she’s from a different area code.' },
    { id: 119, title: 'line 119', content: 'We’re going to get older, whether we like it or not, so the only question is whether we get on with our lives or desperately cling to the past.' },
    { id: 120, title: 'line 120', content: 'This isn’t Barney, but I hear that guy’s awesome. All right. Listen very carefully. You will get your stuff back if you are able to complete a series of challenges. Number one, put on the suit. Number two, meet me at MacLaren’s in an hour.' },
    { id: 121, title: 'line 121', content: 'Shut up! Now listen to me. The clock is ticking. Okay, first thing, we scoop up all these little pieces of tofu and cabbage.' },
    { id: 122, title: 'line 122', content: 'Kids!? No! Don’t have kids! The rule is no kids until you’re at least 45. Don’t you EVER read my blog? It’s gotten a lot better.' },
    { id: 123, title: 'line 123', content: 'Lily: ‘I know what’s bothering you. The cabbie just didn’t look enough like Barney.’ Marshall: ‘Well, that’s just not true.’' },
    { id: 124, title: 'line 124', content: 'The never-ending battle of my life. Career vs. romance.' },
    { id: 125, title: 'line 125', content: 'Let’s just say there were some senior citizens who attempted to ‘drown’ on my watch … and sadly one who did.' },
    { id: 126, title: 'line 126', content: 'Why is Ellen DeGeneres in our bedroom?' },
    { id: 127, title: 'line 127', content: 'I can’t wait to tell the gang. This is one of those moments you dream about! Guys… Lily and I… are having unprotected sex. I just got the chills.' },
    { id: 128, title: 'line 128', content: 'You guys bangin’? Keep goin’, I’m not even here. But just for the record? Having a baby? Big mistake.' },
    { id: 129, title: 'line 129', content: 'Let’s look at the facts here. You made us sit down and listen to this story about how you met Mom, yet Mom’s hardly in the story. No. This is a story about how you’re totally in love with Aunt Robin. And you’re thinking of asking her out, and you want to know if we’re okay with it.' },
    { id: 130, title: 'line 130', content: 'Older Ted: [about seeing Robin for the first time] It was like something out of an old movie. Where the sailor sees the girl across the crowded dance floor and turns to his buddy, and says, ‘See that girl? I’m gonna marry her someday.’ Ted: Hey, Barney. See that girl? Barney: Oh, yeah, you know she likes it dirty.' },
    { id: 131, title: 'line 131', content: 'She doesn’t say ‘I love you’ like a normal person. Instead, she’ll laugh, shake her head, give you a little smile, and say, ‘You’re an idiot.’' },
    { id: 132, title: 'line 132', content: 'Being in a couple is hard. And committing, making sacrifices — it’s hard. But if it’s the right person, it’s easy.' }
];

app.get('/api/quotes', (req, res) => {
    res.send(himymQuotes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})