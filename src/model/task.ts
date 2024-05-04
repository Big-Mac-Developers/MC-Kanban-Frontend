
interface MainTaskInitial {
    title: string
    description: string
    due_date: Date
    status: Status
    board_id: number
}

export interface MainTask extends MainTaskInitial {
    id: string
    subtasks: SubTask[]

}
export interface SubTaskInitial {
    title: string
    description: string
    due_date?: Date
    status: Status
    main_task_id: string

}
export interface SubTask extends SubTaskInitial {
    id: string
    assignee: string
    assigned_date?: Date
    completed_date?: Date
}

export type Status = "todo" | "in-progress" | "done"