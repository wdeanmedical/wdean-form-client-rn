export const handleFieldChange = (field, e, currentForm) => {
  const { fields } = currentForm.state
  fields[field] = e.target.value
  currentForm.setState({ fields })
}
