import QAItem from "../QAItem/QAItem";

const questionsAnswers = [
    {
        id: '1',
        question: 'What is ReactJS',
        answer: 'React is an open source Javascript library developed by facebook'
    },
    {
        id: 2,
        question: 'Types of React components',
        answer: 'There are 2 types of react components; the Functional and Class components'
    },
    {
        id: 3,
        question: 'What is Redux',
        answer: 'Redux is a predictable state management library that follows the flux architecture'
    }
]
const QAList = () => {
    return questionsAnswers.map(qa => <QAItem key={qa.id} qa={qa} />)
}

export default QAList;