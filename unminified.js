// Find all labelled fields
let labels = Array.from(document.getElementsByTagName('label'))

// Filter labelled fields to relevant ones
let enabledFields = labels.filter((label) => {
  let dataset = Object.assign({}, label.dataset)
  let rootParent = label.parentElement.parentElement.parentElement
  if (
    dataset.hasOwnProperty('gardenId') &&
    dataset.gardenId === 'forms.text_label'
  )
    if (rootParent.style.display != 'none')
      if (
        label.innerText !== 'Followers' &&
        label.innerText !== 'TRA - Problem Summary*'
      )
        return true
  return false
})

// Copy input value to clipboard
const copyToClipboard = (identifier) => {
  let value = document.getElementById(identifier).value.toString()
  navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
    if (result.state === 'granted') {
      const type = 'text/plain'
      const blob = new Blob([value], { type })
      let data = [new ClipboardItem({ [type]: blob })]
      navigator.clipboard.write(data).then(
        (err) => null,
        (err) => console.log('uh oh', err)
      )
    } else alert('You need to grant clipboard permissions!')
  })
}

enabledFields.forEach((label) => {
  // Insert the links
  let insertParent = label.parentElement

  let searchLinkFieldOnly = document.createElement('a')
  searchLinkFieldOnly.innerText = 'Search Field'
  searchLinkFieldOnly.style.float = 'left'
  searchLinkFieldOnly.style.padding = '7px 5px 5px'

  let searchLinkWithValue = document.createElement('a')
  searchLinkWithValue.innerText = 'Search Value'
  searchLinkWithValue.style.float = 'right'
  searchLinkWithValue.style.padding = '7px 5px 5px'

  insertParent.appendChild(searchLinkFieldOnly)
  insertParent.appendChild(searchLinkWithValue)

  // Create hidden inputs, whose value we can later read

  let rootParent = label.parentElement.parentElement.parentElement
  let classListObject = Object.assign({}, rootParent.classList)
  let input = label.parentElement.childNodes[1]

  let customFieldOnly
  let customFieldWithValue
  
  // We need a pseudo GUID to segment the field values when multiple tickets are open in the same tab 
  let getId = max => Math.floor(Math.random() * Math.floor(max)); 
  let identifier

  // Figure out the custom_field_ id, and then create the search terms, and an identifier
  Object.keys(classListObject).forEach((key) => {
    if (classListObject[key].match(/custom_field_/)) {
      identifier = classListObject[key]
      customFieldOnly = identifier + ':'
      customFieldWithValue = identifier + ':' + input.value
    }
  })

  // Add inputs to the DOM
  let inputWithValue = document.createElement('input')
  let inputFieldOnly = document.createElement('input')
  

  inputFieldOnly.style.display = 'none'
  inputFieldOnly.value = customFieldOnly
  inputFieldOnly.id = getId(9999999) + "-" +  identifier + '-field'

  inputWithValue.style.display = 'none'
  inputWithValue.value = customFieldWithValue
  inputWithValue.id = getId(9999999) + "-" + identifier + '-value' 

  insertParent.appendChild(inputFieldOnly)
  insertParent.appendChild(inputWithValue)

  // Hook up the links to copy the inputs field to our clipboard
  searchLinkFieldOnly.addEventListener('click', () =>
    copyToClipboard(inputFieldOnly.id)
  )
  searchLinkWithValue.addEventListener('click', () =>
    copyToClipboard(inputWithValue.id)
  )
})
