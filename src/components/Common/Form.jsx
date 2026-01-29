import React from 'react'
import Container from './Container'

const Form = () => {
  return (
    <Container>
        <form className='w-full max-w-xl my-10'>
        <input list="browsers" name="browser" className='w-full px-3 py-3 border'/>
        <datalist id="browsers">
            <option value="Edge"/>
            <option value="Firefox"/>
            <option value="Chrome"/>
            <option value="Opera"/>
            <option value="Safari"/>
        </datalist>
        <input type="submit" value="Submit"/>
</form>
    </Container>
  )
}

export default Form