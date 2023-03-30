import img1 from '../img/quiz/img.png';
import img2 from '../img/quiz/img2.png';
import img3 from '../img/quiz/img3.png';
import img4 from '../img/quiz/img4.png';
import img5 from '../img/quiz/img5.png';
import img6 from '../img/quiz/img6.png';
import img7 from '../img/quiz/img7.png';
import img8 from '../img/quiz/img8.png';
import whatsIcon from '../img/icons/whatsUp.svg';
import telegaIcon from '../img/icons/telegram1.svg';
import viberIcon from '../img/icons/viber.svg';




export const quizDb = [
{
        qu1: {
            answerId: 0,
            answerSub: 'realty',
            title: 'Какая недвижимость вас интересует?',
            question: [
                {
                    id:1,
                    typeQ: 'realty',
                    url: img1,
                    desc: 'Квартиры'
                },
                {
                    id:2,
                    typeQ: 'realty',
                    url: img2,
                    desc: 'Пентхаусы'
                },
        ]
        }
}, 
{
    qu1: {
        answerId: 1,
        answerSub: 'layout',
        title: 'Какая планировка вам подходит?',
        question: [
            {
                id:1,
                typeQ: 'layout',
                url: img3,
                desc: 'Студия'
            },
            {
                id:2,
                typeQ: 'layout',
                url: img4,
                desc: '1-2 спальни'
            },
            {
                id:3,
                typeQ: 'layout',
                url: img5,
                desc: '3-4 спальни'
            },
    ]
    }
}, 
{
    qu1: {
        answerId: 2,
        answerSub: 'square',
        title: 'Какую площадь объекта вы рассматриваете?',
        question: [
            {
                id:1,
                typeQ: 'square',
                url: img6,
                desc: '26 м² — 100 м²'
            },
            {
                id:2,
                typeQ: 'square',
                url: img7,
                desc: '100 м² — 150 м²'
            },
            {
                id:3,
                typeQ: 'square',
                url: img8,
                desc: '150 м² — 192 м²'
            },
    ]
    }
},
{
    qu1: {
        answerId: 3,
        answerSub: 'parking',
        title: 'Планируете ли вы использовать подземный паркинг?',
        question: [
            {
                id:1,
                typeQ: 'parking',
                desc: 'Да, планирую'
            },
            {
                id:2,
                typeQ: 'parking',
                desc: 'Не планирую'
            },
    ]
    }
},
{
    qu1: {
        answerId: 4,
        answerSub: 'messanger',
        title: 'Подобрали 4 варианта недвижимости по вашим параметрам. Куда их прислать?',
        question: [
            {
                id:1,
                typeQ: 'messanger',
                url: whatsIcon,
                desc: 'в Вотсап'
            },
            {
                id:2,
                typeQ: 'messanger',
                url: telegaIcon,
                desc: 'в Телеграм'
            },
            {
                id:3,
                typeQ: 'messanger',
                url: viberIcon,
                desc: 'в Вайбер'
            },
    ]
    }
},
]