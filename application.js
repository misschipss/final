function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
  }

function serializeForm(formNode) {
    const { elements } = formNode
  
    const data = Array.from(elements)
      .map((element) => {
        const { name, type } = element
        const value = type === 'checkbox' ? element.checked : element.value
  
        return { name, value }
      })
      .filter((item) => !!item.name)
  
    console.log(data)
  }

const applicantForm = document.getElementById('application')
applicantForm.addEventListener('submit', handleFormSubmit)