const btns = document.querySelectorAll('.btn')
const content = document.querySelector('.container')

let questionIndex = 0

btns.forEach(el => {
    el.addEventListener('click', changeSlide)
})

function changeSlide() {
    content.innerHTML = ''
    for (let index = questionIndex; index < questions.length; index++) {
        let arr = questions[index]
        if (arr.type === 'oneOfMany') {
            createQuestions(arr, index)
            questionIndex++
            return
        }else if (arr.type === 'manual') {
            createManual(arr, index)
            questionIndex++
            return
        }else if (arr.type === 'manyOfMany') {
            createMany(arr, index)
            fun()
            questionIndex++
            return
        }else if (arr.type === 'oneOfMore') {
            oneOfMore(arr, index)
            fun()
            questionIndex++
            return
        }else if (arr.type === 'manyOfMore') {
            manyOfMore(arr, index)
            fun()
            questionIndex++
            return
        }
    }
}

const createManual = (item, index) =>{
    const manual = `
        <div class="manual">
        <div class="container">
            <h3 class="manual__h3">
                Quick Tips
            </h3>
            <p class="manual__p">
                The Keto Diet is a low carb, high fat, moderate protein diet. When you eat <br> according to this plan, your metabolism switches to burning stored body fat <br> for energy.
            </p>
            <p class="manual__p">
                The keto diet has been shown to reduce and stabilize blood sugar, help <br> immunity and promote weight loss. The keto diet works for many people <br> who have not had success losing weight in the past.
            </p>
            <h3 class="manual__h3">
                Clinical Benefits Of The Keto Diet
            </h3>
            <div class="manual__main">
                <ul class="manual__ul">
                    <li class="manual__ul__item"><strong>Weight Loss And Anti-Aging</strong>  - Harvard 2018 Study, Cell Metab 2017</li>
                    <li class="manual__ul__item"><strong>Boost Immune Response</strong> - Science Immunology Yale 2019 Study</li>
                    <li class="manual__ul__item"><strong>Help Regulate Blood Sugar</strong> - London 2005 Study</li>
                    <li class="manual__ul__item"><strong>Reduce Cholesterol And Triglycerides</strong> - Clinical Cardiology 2004 Study</li>
                    <li class="manual__ul__item"><strong>Improve Mood, Wellbeing & Quality Of Life</strong> - Neuroscience 2018 Study</li>
                    <li class="manual__ul__item"><strong>Reduced Blood Pressure</strong> - Archives of Internal Medicine 2010 Study</li>
                </ul>
            </div>
            

            <button class="btn manual__btn men__type" onclick="changeSlide()">Got It, Next</button>
            <button class="back__btn" onclick="backClick(${index})">back</button>
        </div>
        

    </div>
    `

    content.innerHTML =  manual
}

const createMany = (item, index) =>{
    const MOM = `
    <div class="MOM">
    <div class="container">
        <h2 class="question">${item.question}</h2>
        <span class="option">${item.amount}</span>
        <div class="checkzone"></div>


        <div class="MOM__footer">
            <button class="MOM__btn btn checkzone__btn men__type" onclick="checkAnswer()">Next</button>
            
            <div class="MOM__progress gender__tab progress__bar">
                <span class="progress">${questionIndex+2}/17</span>
            </div>
        </div>
        <button class="back__btn" onclick="backClick(${index})">back</button>

        
    </div>
</div>
    `

    content.innerHTML =  MOM



    let answersBlock = document.querySelector('.checkzone')

    item.answers.map(el =>{
        const answerTemplate = `
        <label class="variant__label box">
            <img  class="variant__img" src="${el.img}" alt="">
            <p class="variant__p">${el.text}</p>
            <input class="variant__input" type="checkbox" name="variant" id="">
        </label>
        `
        answersBlock.innerHTML += answerTemplate
    })
}

function checkAnswer() {
    let check = document.querySelector('input[type="checkbox"]:checked')
    if (!check) {
        return
    }
    changeSlide()
}

const fun = () =>{
    let searchInput = document.querySelectorAll('.variant__label')
    console.log(searchInput);
    searchInput.forEach(element => {
        console.log(element);
        element.onclick = () =>{
            console.log(1);
            if (document.querySelector('input:checked')) {
                element.classList.add('select')
                console.log(2);
                return
            }else{
                element.classList.remove('select')
                console.log(3);
                return
            }
        }
    });
}

const oneOfMore = (item, index) =>{
    const MOM = `
        <div class="MOM">
            <div class="container">
                <h2 class="question">${item.question}</h2>
                <span class="option">${item.amount}</span>
                <div class="checkzone"></div>


                <div class="MOM__footer">
                    <button class="MOM__btn btn checkzone__btn men__type" onclick="checkAnswer()">Next</button>
                    
                    <div class="MOM__progress gender__tab progress__bar">
                        <span class="progress">${questionIndex+2}/17</span>
                    </div>
                </div>
                <button class="back__btn" onclick="backClick(${index})">back</button>

                
            </div>
        </div>
    `

    content.innerHTML =  MOM    

    let answersBlock = document.querySelector('.checkzone')

    item.answers.map(el =>{
        const answerTemplate = `
        <label class="variant__label box">
            <h4 class="variant__h4">${el.title}</h4>
            <p class="variant__p">${el.text}</p>
            <input class="variant__input" type="checkbox" name="variant" id="">
        </label>
        `
        answersBlock.innerHTML += answerTemplate
    })
}

const manyOfMore = (item, index) =>{
    const MOM = `
        <div class="MOM">
            <div class="container">
                <h2 class="question">${item.question}</h2>
                <span class="option">${item.amount}</span>
                <div class="checkzone"></div>


                <div class="MOM__footer">
                    <button class="MOM__btn btn checkzone__btn men__type" onclick="checkAnswer()">Next</button>
                    
                    <div class="MOM__progress gender__tab progress__bar">
                        <span class="progress">${questionIndex+2}/17</span>
                    </div>
                </div>
                <button class="back__btn" onclick="backClick(${index})">back</button>

                
            </div>
        </div>
    `

    content.innerHTML =  MOM    

    let answersBlock = document.querySelector('.checkzone')

    item.answers.map(el =>{
        const answerTemplate = `
        <label class="variant__label box">
            <p class="variant__p">${el}</p>
            <input class="variant__input" type="checkbox" name="variant" id="">
        </label>
        `
        answersBlock.innerHTML += answerTemplate
    })
}

const createQuestions = (item, index) =>{
    console.log(item);
    const temlplate = `
        <div class="second__slide">
            <div class="container">
                <h2 class="question">${item.question}</h2>
                <span class="option">${item.amount}</span>
                <div class="answers">
                </div>
                <button class="back__btn" onclick="backClick(${index})"> back</button>
                <div class="OOM__progress gender__tab progress__bar">
                    <span class="progress">${questionIndex+2}/17</span>
                </div>
            </div>
        </div>    
    `
    content.innerHTML = temlplate

    let answersBlock = document.querySelector('.answers')
    item.answers.map(el =>{
        const answerTemplate = `
            <button class="answer" onclick="changeSlide()">${el}</button>
        `
        answersBlock.innerHTML += answerTemplate
    })
}

function backClick(index) {
    questionIndex = index - 1
    changeSlide()
}