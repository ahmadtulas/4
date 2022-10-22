/* eslint-disable no-undef */
const todoList = require('../todo');

const {all, markAsComplete, add} = todoList();

describe("To do list test suits",()=>{
    beforeAll(()=>{
        add(
            {
            title: "test To do",
            completed: false,
            duedate: new Date().toLocaleDateString("en-CA")
            }
        )
    })
    test("should add new todo",()=>{
        const todoItemCount = all.length;
        add(
            {
            title: "test To do",
            completed: false,
            duedate: new Date().toLocaleDateString("en-CA")
            }
        )
        expect(all.length).toBe(todoItemCount + 1);
    });
    test("Should markAsComplete",()=>{
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
})