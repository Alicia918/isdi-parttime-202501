



/*
var objectEmail = { label: 'Email', inputType: 'email', inputPlaceholder: 'my@email.com', inputId: 'email', isRequired: true };
var objectPassword = { label: 'Password', inputType: 'password', inputPlaceholder: '**********', inputId: 'password', isRequired: true }
var objectConfirmPassword = { label: 'Confirm password', inputType: 'password', inputPlaceholder: '**********', inputId: 'confirmation-password', isRequired: true }

var registerForm = createForm([objectEmail, objectPassword, objectConfirmPassword], 'Registrate', registerUser) //usamos una función que nos permite registrar el usuario y cambiar de vista
var registerForm = createForm([objectEmail, objectPassword, objectConfirmPassword], 'Registrate', registerUser) //usamos una función que nos permite registrar el usuario y cambiar de vista
registerForm.className = 'form'
*/

/*
const Form = ({ inputs, onsSubmitCallback, submitText, className }) => {
    const onSubmitForm = (event) => {
        event.preventDefault()
        const form = event.target
        const formData = {}
        inputs.forEach(input => {
            const inputName = input.id;
            const inputValue = form[input.id].value
            formData[inputName] = inputValue
        })

        onsSubmitCallback(formData)
    }

    return <form className={className} onSubmit={onSubmitForm}>
        {inputs.map((input, index) => {
            return <input className={input.className} key={index} id={input.id} type={input.type} placeholder={input.placeholder} />
        })}
        <input type="submit" value={submitText} />
    </form>
}*/
