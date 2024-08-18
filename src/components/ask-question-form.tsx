import { addQuestion } from "@/actions/actions";

export default function AskQuestionForm() {
  return (
    <form action={addQuestion} className="w-[500px] flex flex-col">
      <textarea
        name="questionText"
        rows={5}
        placeholder="Ask your question"
        spellCheck={false}
        className="px-3 py-2">
      </textarea>

      <button
        type="submit"
        className="px-5 py-2 rounded-md mt-2 bg-zinc-900 text-white"
      >
        Submit question
      </button>
    </form>
  )
}
