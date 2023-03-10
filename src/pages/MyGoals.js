import { useState, useEffect } from "react";
import { Spacer, Text, Flex, Button } from "@chakra-ui/react";

import GoalList from "../components/GoalList.js";
import AddRootGoalModal from "../components/AddRootGoalModal.js";

import axios from "axios";

const getRootGoalsAPI = () => {
  return axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/goals/roots`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const createGoalAPI = (goalData) => {
  console.log(goalData);
  return axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/goals`, goalData)
    .catch((err) => {
      console.log(err);
    });
};

const deleteGoalAPI = (id) => {
  return axios
    .delete(`${process.env.REACT_APP_BACKEND_URL}/goals/${id}`)
    .catch((error) => {
      console.log(error);
    });
};

const updateGoalCompleteAPI = (goal) => {
  const requested_change = goal.complete ? "mark_incomplete" : "mark_complete";
  return axios
    .patch(
      `${process.env.REACT_APP_BACKEND_URL}/goals/${goal.id}/${requested_change}`
    )
    .catch((error) => {
      console.log(error);
    });
};

function MyGoals() {
  const [rootGoals, setRootGoals] = useState([]);
  const [isRootModalOpen, setIsRootModalOpen] = useState(false);

  const getRootGoals = () => {
    getRootGoalsAPI().then((data) => {
      setRootGoals(data);
    });
  };

  useEffect(() => {
    getRootGoals();
  }, []);

  const addRootGoal = (name) => {
    const requestBody = { title: name };
    return createGoalAPI(requestBody).then((result) => {
      setIsRootModalOpen(false);
      return getRootGoals();
    });
  };

  const deleteGoal = (goalId) => {
    return deleteGoalAPI(goalId).then((result) => {
      return getRootGoals();
    });
  };

  const updateGoalComplete = (goalData) => {
    return updateGoalCompleteAPI(goalData).then((result) => {
      return getRootGoals();
    });
  };

  return (
    <>
      <Flex align="center" justifyContent="center" margin={3} gap={2}>
        <Flex padding={2} gap={4}>
          <Flex align="center" justifyContent="space-between">
            <Flex margin={2}>
              <Text fontSize="lg" fontWeight="bold" color="gray.700">
                My Goals
              </Text>
            </Flex>
            <Spacer />
            <Button size="sm" onClick={() => setIsRootModalOpen(true)}>
              +
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <GoalList
        rootGoals={rootGoals}
        updateGoalComplete={updateGoalComplete}
        deleteGoal={deleteGoal}
      />
      <AddRootGoalModal
        isOpen={isRootModalOpen}
        onClose={() => setIsRootModalOpen(false)}
        onSubmit={addRootGoal}
      />
    </>
  );
}
export default MyGoals;
