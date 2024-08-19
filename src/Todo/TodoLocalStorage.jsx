const TodoKey="reactTodo"

export const GetLocalStorage=()=>{
    const rawTodo=localStorage.getItem(TodoKey)
    if (!rawTodo) return []; // If nothing in localStorage, start with an empty array
    try {
      return JSON.parse(rawTodo); // Attempt to parse the stored data
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      return []; // If parsing fails, start with an empty array
    }
}

export const SetLocalStorage=(task)=>{
  return  localStorage.setItem(TodoKey, JSON.stringify(task))
}