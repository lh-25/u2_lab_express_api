const db = require('../db')
const { Actor, Movie, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const actor1 = await new Actor({
    name: "Robert Downey Jr.",
    age: 59,
    birthday: "April 4, 1965",
    isAlive: true,
    image: "https://example.com/rdj.jpg"
    })
    actor1.save()

    const actor2 = await new Actor({
    name: "Scarlett Johansson",
    age: 39,
    birthday: "November 22, 1984",
    isAlive: true,
    image: "https://example.com/scarlett.jpg"
    })
    actor2.save()

    const actor3 = await new Actor({
    name: "Tom Hanks",
    age: 67,
    birthday: "July 9, 1956",
    isAlive: true,
    image: "https://example.com/tomhanks.jpg"
    })
    actor3.save()

    const actor4 = await new Actor({
    name: "Heath Ledger",
    age: 28,
    birthday: "April 4, 1979",
    isAlive: false,
    image: "https://example.com/heathledger.jpg"
    })
    actor4.save()

    const actor5 = await new Actor({
    name: "Emma Watson",
    age: 34,
    birthday: "April 15, 1990",
    isAlive: true,
    image: "https://example.com/emmawatson.jpg"
    })
    actor5.save()

    const review1 = await new Review({
        score: 5,
        comment: "An iconic performance by Robert Downey Jr.! The perfect start to the Marvel Cinematic Universe with thrilling action and great character development.",
    })
    review1.save()

    const review2 = await new Review({
        score: 2,
        comment: "Overhyped. While the effects were good, the plot felt predictable, and the villain was underwhelming.",
    })
    review2.save()
    
    const review3 = await new Review({
        score: 5,
    comment: "Heath Ledger's Joker is one of the best villains in movie history. Dark, gripping, and masterfully directed. A true cinematic masterpiece.",
        })
        review3.save()
        const review4 = await new Review({
            score: 3,
    comment: "While Ledger's performance was brilliant, the movie dragged on too long. Some parts felt unnecessary and slowed down the pace.",
            })
            review4.save()
            const review5 = await new Review({
                score: 4,
    comment: "Robert Downey Jr. delivers a unique take on Sherlock Holmes, full of charisma and wit. The chemistry between Holmes and Watson is fantastic.",
                })
                review5.save()
                const review6 = await new Review({
                    score: 2,
    comment: "Visually interesting but the plot was overly complicated and hard to follow. The action scenes didn't fit well with the story.",
                    })
                    review6.save()

    const movies = [
        {
            title: "Iron Man",
            contentRating: "PG-13",
            runTime: 126,
            yearReleased: 2008,
            description: "A billionaire industrialist and genius inventor, Tony Stark, creates a suit of armor to fight crime.",
            poster: "https://example.com/ironman.jpg",
            actor: actor1._id,
            review:review1._id, 
            review2: review2._id
          },
          {
            title: "Sherlock Holmes",
            contentRating: "PG-13",
            runTime: 128,
            yearReleased: 2009,
            description: "Detective Sherlock Holmes and his partner Watson engage in a battle of wits and brawn with a nemesis.",
            poster: "https://example.com/sherlockholmes.jpg",
            actor: actor1._id,
            review:review5._id, 
            review2:review6._id
          },
          {
            title: "Lucy",
            contentRating: "R",
            runTime: 89,
            yearReleased: 2014,
            description: "A woman, accidentally caught in a dark deal, transforms into a merciless warrior evolving beyond human logic.",
            poster: "https://example.com/lucy.jpg",
            actor: actor2._id
          },
          {
            title: "Marriage Story",
            contentRating: "R",
            runTime: 137,
            yearReleased: 2019,
            description: "A stage director and his actor wife struggle through a grueling, coast-to-coast divorce.",
            poster: "https://example.com/marriagestory.jpg",
            actor: actor2._id
          },
          {
            title: "Forrest Gump",
            contentRating: "PG-13",
            runTime: 142,
            yearReleased: 1994,
            description: "The story of Forrest Gump, a man with low intelligence, who witnesses and influences several historical events.",
            poster: "https://example.com/forrestgump.jpg",
            actor: actor3._id
          },
          {
            title: "Cast Away",
            contentRating: "PG-13",
            runTime: 143,
            yearReleased: 2000,
            description: "A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted island.",
            poster: "https://example.com/castaway.jpg",
            actor: actor3._id
          },
          {
            title: "The Dark Knight",
            contentRating: "PG-13",
            runTime: 152,
            yearReleased: 2008,
            description: "Batman faces the Joker, a criminal mastermind hell-bent on creating chaos in Gotham City.",
            poster: "https://example.com/thedarkknight.jpg",
            actor: actor4._id,
            review:review3._id, 
            review2: review4._id
          },
          {
            title: "A Knight's Tale",
            contentRating: "PG-13",
            runTime: 132,
            yearReleased: 2001,
            description: "A peasant squire follows his dream to become a knight.",
            poster: "https://example.com/aknightstale.jpg",
            actor: actor4._id
          },
          {
            title: "Harry Potter and the Sorcerer's Stone",
            contentRating: "PG",
            runTime: 152,
            yearReleased: 2001,
            description: "Harry, Hermione, and Ron discover their magical world and face dark forces.",
            poster: "https://example.com/harrypotter1.jpg",
            actor: actor5._id
          },
          {
            title: "Beauty and the Beast",
            contentRating: "PG",
            runTime: 129,
            yearReleased: 2017,
            description: "A young woman falls in love with a cursed prince turned into a beast.",
            poster: "https://example.com/beautyandthebeast.jpg",
            actor: actor5._id
          }
    ]


    await Movie.insertMany(movies)
    console.log('Created movies!')
}
const run = async () => {
    await main()
    db.close()
  }
  
  run()