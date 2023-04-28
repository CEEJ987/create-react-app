import React, { useState } from "react"
import Form from 'react-bootstrap/Form';

const Beastfilter = ({beasts, onfilterchange }) => {
    const [selectedFilter, setSelectedFilter] = useState("");
  return 
}
  function SelectHorns() {
    return (
      <Form aria-label="Number of Selection">
        <option>Number of Selection</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form>
    );
  }
  

  export default SelectHorns;


  


