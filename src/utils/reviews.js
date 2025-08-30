import Person1Img from './images/jackmoore.png';
import Person2Img from './images/J.png';
import Person3Img from './images/austin.png';
import Person4Img from './images/akash.png';

const reviews = [
    {
        id: 1,
        description: 'The food was amazing. Filled with authentic Indian flavors. A must try for any Indian food lovers in Gloucester.',
        img: [Person1Img],
        name: 'Jack Moore',
        initialMotion: '-300px'
    },
    {
        id: 2,
        description: 'Everything we ordered was delicious - the herbs and spices were varied and really fresh-tasting. The starters were very interesting and well worth trying out alongside the mains.',
        img: [Person2Img],
        name: 'Jon Marriette',
        initialMotion: '350px'
    },
    {
        id: 3,
        description: 'Super Apna home food, nothing to compare in Glos.',
        img: [Person3Img],
        name: 'Austin Parry',
        initialMotion: '-300px'
    },
    {
        id: 4,
        description: 'I’ve tried quite a few Indian takeaways in Gloucester, but this one stands out as the best by far. The food is packed with authentic flavors. If you love Indian food, this place is 100% worth trying.',
        img: [Person4Img],
        name: 'Akash Pandey',
        initialMotion: '350px'
    }
];

export default reviews;