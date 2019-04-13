import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'

import { todoThunks } from '../../thunks/todo'

import { getTasks } from '../../selectors/todo'

import Table from '../table'

import './Todo.css'

const Todo = ({ addTask, getAll, tasks }) => {
    const [task, updateTask] = useState('')

    useEffect(() => {
        getAll()
    }, [])

    const handleFormSubmit = event => {
        event.preventDefault()
        updateTask('')
        addTask(task)
    }

    const handleInputChange = ({ target: { value }}) => updateTask(value)

    return (
        <>
            <form className="Todo-Form" onSubmit={handleFormSubmit}>
                <input className="Todo-Field" onChange={ handleInputChange } placeholder="Type your task here..." value={task}/>
                <button className="Todo-Btn" type="submit">Add</button>
            </form>
            <Table columns={['title']} data={tasks}/>
        </>
    )

}

Todo.propTypes = {
    addTask: PropTypes.func.isRequired,
    getAll: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    tasks: getTasks(state)
})

const mapDispatchToProps = dispatch => ({
    addTask: title => dispatch(todoThunks.add(title)),
    getAll: () => dispatch(todoThunks.getAll())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)
