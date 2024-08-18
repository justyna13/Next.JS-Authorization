"use client";

import { deleteQuestion } from '@/actions/actions';

export default function QuestionDeleteButton({id}: {id: number}) {
  return (
    <button className="ml-auto" onClick={() => deleteQuestion(id)}>
      ❌
    </button>
  )
}
