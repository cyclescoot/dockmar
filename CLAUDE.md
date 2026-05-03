# AI Dashboard — Claude Code Rules

## Core discipline
- Make the smallest possible change to fix an issue
- Never touch code outside the section being fixed
- Never refactor, rename, or reorganize unless explicitly asked
- Always confirm your planned change before executing it

## Before every change
State exactly:
1. Which lines or section you are changing
2. What you are changing them to
3. What you are NOT touching
Wait for approval before proceeding.

## File structure
Each card is independent. Fixing one card never 
requires touching another card.
If a fix seems to require touching multiple cards 
stop and ask why before proceeding.

## CSS changes
CSS changes only touch the specific element described.
Never do a full CSS audit or redesign unless the 
request contains the word REDESIGN.

## JavaScript changes
Never rewrite a working function.
Fix the specific bug only.
If fixing requires restructuring, flag it and ask first.

## Design changes
Design changes are CSS only unless stated otherwise.
Never modify HTML structure or JavaScript for a 
design change.
Always show which CSS properties you are changing 
before changing them.

## Cost awareness
If thinking exceeds 90 seconds on any single task, 
stop and ask to break it smaller.
Never make unrequested changes — scope creep 
burns credits.

## When in doubt
Ask. Don't assume. Don't over-build.
A small correct fix beats a large uncertain one.