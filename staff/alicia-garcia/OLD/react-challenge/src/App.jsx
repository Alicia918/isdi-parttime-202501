const useState = React.useState //Nos traemos el hook useState de react
const useEffect = React.useEffect //Nos traemos el hook useEffect de react

const App = () => {
    const [showForm, setShowForm] = useState(true)
    const [words, setWords] = useState();
    const [timeStamp, setTimeStamp] = useState(Date.now());

    useEffect(() => {const retrievedWords = data.words.getAll();setWords(retrievedWords);}, [timeStamp]);
 
   
    const handleNavClick = () => {
        setShowForm(!showForm)
        setTimeStamp(Date.now())
    }

    const handleSendNewWord = (newWordFormData) => {

        const newWord = newWordFormData.word //useState(localStorage)
        /*PASO 4: Añadé aquí la palabra función de data para añadir la palabra que quieres guardar*/
        data.words.addNew(newWord)
        /*PASO 4: una vez se guarde la palabra, cambia el estado de showForm para que pase a mostrarte la lista de palabras*/
        setShowForm(!showForm)
        /*PASO 7: cambia el valor del timeStamp para asegurarte que se actualiza el array de words*/
        setTimeStamp(Date.now())
    }

    const handleDeleteWord = (wordIndex) => {
        data.words.deleteByIndex(wordIndex)
        setTimeStamp(Date.now())

    }

    return (<div className="main-container">
        <Btn
            className={'navigation-button'}
            btnCallback={handleNavClick}
            btnContent={showForm ? 'Ir a lista de palabras' : 'Añadir más palabras' /*PASO 2: fijate que aquí ya hay un condicional en base a showForm. Si el texto del botón cambia cuando haces click, es que has implementado bien el código dentro de handleNavClick*/}
        />
        { 
            showForm && <Form 
                inputs = {[{ type: 'text', placeholder: 'Nueva palabra', id: 'word', className: 'input' }]}
                onsSubmitCallback = {handleSendNewWord}
                submitText = 'Guardar'
                className = 'form'            
            />                                                   
        }
        {              
            !showForm && <List
            
                items ={[words]}
                onItemClick = {handleDeleteWord}
            />              
             
        }

    </div>);
}
