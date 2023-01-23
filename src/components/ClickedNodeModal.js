import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/modal";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
// import PropTypes from "prop-types";

function ClickedNodeModal({
  isOpen,
  onClose,
  onSubmit,
  onDelete,
  onUpdateComplete,
  clickedNode,
}) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name);
    setName("");
  };

  const getUpdateButtonText = () => {
    if (clickedNode) {
      console.log(Boolean(clickedNode.data.complete));
      return `Mark Node ${
        Boolean(clickedNode.data.complete) ? "Incomplete" : "Complete"
      }`;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} onSubmit={onSubmit}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleSubmit} disabled={!name}>
            Add Subgoal to Node
          </Button>
        </ModalBody>
        <ModalFooter>
          {/* maybe change this to drop down select or buttons or check marks */}
          <Button colorScheme="orange" onClick={() => onUpdateComplete()}>
            {getUpdateButtonText()}
          </Button>
          <Button colorScheme="red" onClick={() => onDelete()}>
            Delete Node
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

// the first submit doesn't work for some reason  ??

// AddNodeModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };

export default ClickedNodeModal;
