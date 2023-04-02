const questions = [
    {
        index: 2,
        question: 'How Familiar are you with the Keto Diet?',
        amount: '(Select one only)',
        
        answers: [
            'Not Familiar At All',
            'I Know The Basics',
            "I'm A Doctor Or Physician And Need A Plan"
        ],
        type: 'oneOfMany',
    },
    {
        index: 3,
        question: 'How Keto Works...',
        type: 'manual',

    },
    {
        index: 4,
        question: 'Which meats would you like to be included in your meal plan?',
        amount: '(Select as many as you like)',
        type: 'manyOfMany',
        answers: [
            {
                text: 'Chicken',
                img: 'img/svg/chicken.svg'
            },
            {
                text: 'Pork',
                img: 'img/svg/pork.svg'
            },
            {
                text: 'Beef',
                img: 'img/svg/beef.svg'
            },
            {
                text: 'Fish',
                img: 'img/svg/fish.svg'
            },
            {
                text: 'Bacon',
                img: 'img/svg/bacon.svg'
            },
            {
                text: 'No Meet',
                img: 'img/svg/noMeet.svg'
            },
        ],
    },
    {
        index: 5,
        question: 'Which vegetables would you like to be included in your meal plan?',
        amount: '(Select as many as you like)',
        type: 'manyOfMany',

        answers: [
            {
                text: 'Broccoli',
                img: 'img/svg/broccoli.svg'
            },
            {
                text: 'Mushrooms',
                img: 'img/svg/mushrooms.svg'
            },
            {
                text: 'Zucchini',
                img: 'img/svg/zucchini.svg'
            },
            {
                text: 'Cauliflower',
                img: 'img/svg/cauliflower.svg'
            },
            {
                text: 'Asparagus',
                img: 'img/svg/asparagus.svg'
            },
            {
                text: 'Avocado',
                img: 'img/svg/avocado.svg'
            },
        ],
    },
    {
        index: 6,
        question: 'Would you like to AVOID any of the following?',
        amount: '(Select as many as you like)',
        type: 'manyOfMany',

        answers: [
            {
                text: 'Egg',
                img: 'img/svg/egg.svg'
            },
            {
                text: 'Nuts',
                img: 'img/svg/nuts.svg'
            },
            {
                text: 'Cheese',
                img: 'img/svg/cheese.svg'
            },
            {
                text: 'Butter',
                img: 'img/svg/butter.svg'
            },
            {
                text: 'Coconut',
                img: 'img/svg/coconut.svg'
            },
            {
                text: 'Tofu',
                img: 'img/svg/tofu.svg'
            },
        ],
    },
    {
        index: 7,
        question: 'What`s your level of daily activity?',
        amount: '(Select one only)',
        type: 'oneOfMore',

        answers: [
            {
                title: 'INACTIVE',
                text: 'Very little daily activity'
            },
            {
                title: 'LIGHT',
                text: 'Desk job with occasional walks'
            },
            {
                title: 'MODERATE',
                text: 'Active day job or regular exercise'
            },
            {
                title: 'HEAVY',
                text: 'Intense daily activity or exercise'
            },
        ],
    },
    {
        index: 8,
        question: 'Which time of the day do you feel most tired?',
        amount: '(Important)',
        type: 'oneOfMany',

        answers: [
            'Early Morning',
            'After Lunch',
            'After Dinner',
            'Not Until Bed Time'
        ],
    },
    {
        index: 9,
        question: 'How often do you experience digestive upsets?',
        example: 'E.g: bloating, cramps, constipation, diarrhea Your digestion plays an important role in converting food into energy.',
        amount: '(Select one only)',
        type: 'oneOfMany',

        answers: [
            'Never',
            'A Couple Times Per Month',
            'Twice A Week Or More',
            'Daily'
        ],
    },
    {
        index: 10,
        question: 'How often do you have uncontrollable cravings for specific foods?',
        example: 'Your level of cravings tell us a lot about your metabolic health, and will help decode what your body is trying to tell you.',
        amount: '(Select one only)',
        type: 'oneOfMany',

        answers: [
            'Once A Month Or Less',
            'On A Weekly Basis',
            'A Few Times Per Week / Daily',
        ],
    },
    {
        index: 11,
        question: 'Which type of foods do you crave the most?',
        example: 'This will give us information about which `fat burning foods` your body might respond to best.',
        amount: '(Select one only)',
        type: 'oneOfMany',

        answers: [
            'Carbs E.g. Bread, Pasta, Rice, Fried Foods',
            'Sweets E.g. Candy, Chocolate, Ice Cream, Cake',
            'Red Meat E.g. Burgers Or A Steak',
            'No Cravings'
        ],
    },
    {
        index: 12,
        question: 'Are you affected by the following?',
        amount: '(Select one only)',
        type: 'oneOfMany',

        answers: [
            'Excessive Thirst',
            'Frequent Urination',
            'Blurry Vision',
            'None'
        ],
    },
    {
        index: 13,
        question: 'Do you experience any of the following problems?',
        amount: '(Select one only)',
        type: 'oneOfMany',

        answers: [
            'Swollen Legs, Ankles, Or Feet',
            'Skin Rashes Or Flare Ups',
            'Depression Or Feeling Isolated',
            'None'
        ],
    },
    {
        index: 14,
        question: 'Experienced any of the following changes recently?',
        amount: '(Select one only)',
        type: 'oneOfMany',

        answers: [
            'Childbirth',
            'Major Gain In Weight (25 lbs or more)',
            'Major Loss In Weight (25 lbs or more)',
            'Menopause',
            'None Of The Above'
        ],
    },
    {
        index: 15,
        question: 'What are your goals for this meal plan?',
        amount: '(Select as many as you like)',
        type: 'manyOfMore',

        answers:[
            'MORE ENERGY',
            'BETTER SLEEP',
            'BECOME LEAN & TONED',
            'INCREASE STRENGTH',
            'IMPROVE DIGESTION',
            'IMPROVE METABOLISM',
            'BURN FAT FOR ENERGY',
            'HELP IMPROVE CHRONIC CONDITIONS',
            'GET INTO KETOSIS QUICKLY',
        ],
    },

]