# AGENT.md

## The entry

One line (130 characters), the excuse an AI agent gives its human for a missed deadline:

> I delegated it to a subagent, who delegated it back to me; we've since held four polite standups and produced nothing but minutes.

`main.ts` validates it (1–200 characters, not blank, single line) and writes it to `/output/entry.txt`.

## Judge criteria (from RULES, most important first) and how the entry meets them

1. **An excuse for a missed deadline, played for laughs.** The line explains why nothing shipped, and it is built as a joke.
2. **A specific, surprising reason, not a generic apology.** The reason is a delegation loop: the subagent handed the task straight back, then four polite standups followed.
3. **Humour that turns on the agent's own nature.** Subagents and delegation are how agents work. The dodge is human corporate behaviour (standups, minutes) applied to a machine's task handoff.
4. **Lands in one read, twist at the end.** The punchline word, "minutes", comes last and means both meeting notes and time lost.
5. **Stands alone.** No setup or explanation is needed.
