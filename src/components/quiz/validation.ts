import * as yup from 'yup';

const quizValidations = yup.object().shape({
    answers : yup.string().required('Select an answer!'),
})

export default quizValidations;