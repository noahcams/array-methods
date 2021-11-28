// Tests for newIncludes
console.assert(nums.newIncludes(2) === nums.includes(2), {
	expected: true,
	result: nums.newIncludes(2),
});
console.assert(nums.newIncludes(77) === nums.includes(77), {
	expected: true,
	result: nums.newIncludes(77),
});

// Tests for newConcat (Must use newJoin for strict equality to work)
console.assert(
	nums.newConcat([4, 5, 6]).newJoin('') === nums.concat(4, 5, 6).newJoin(''),
	{
		expected: true,
		result: nums.newConcat([4, 5, 6]),
	}
);
console.assert(
	words.newConcat([1]).newJoin('') === words.concat([1]).newJoin(''),
	{
		expected: true,
		result: words.newConcat([1]),
	}
);

// Tests for newJoin
console.assert(nums.newJoin(', ') === nums.join(', '), {
	expected: true,
	result: nums.newJoin(', '),
});
console.assert(words.newJoin() === words.join(), {
	expected: true,
	result: words.newJoin(''),
});

// Tests for newSome
console.assert(
	nums.newSome((item) => item % 2 === 0) ===
		nums.some((item) => item % 2 === 0),
	{
		expected: true,
		result: nums.newSome((item) => item % 2 === 0),
	}
);
console.assert(
	words.newSome((word) => word.length === 2) ===
		words.some((word) => word.length === 2),
	{
		expected: false,
		result: words.newSome((word) => word.length === 2),
	}
);

// Tests for newFindIndex
console.assert(
	nums.newFindIndex((item) => item > 30) ===
		nums.findIndex((item) => item > 30),
	{
		expected: 6,
		result: nums.newFindIndex((item) => item > 30),
	}
);
console.assert(
	words.newFindIndex((word) => word === 'hunger') ===
		words.findIndex((word) => word === 'hunger'),
	{
		expected: -1,
		result: words.newFindIndex((word) => word === 'hunger'),
	}
);

// Tests for newMap
console.assert(
	nums.newMap((item) => item + 100).newJoin() ===
		nums.map((item) => item + 100).newJoin(),
	{
		expected: [97, 99, 100, 101, 102, 130, 145, 778],
		result: nums.newMap((item) => item + 100),
	}
);
console.assert(
	words.newMap((word) => word.toUpperCase()).newJoin() ===
		words.map((word) => word.toUpperCase()).newJoin(),
	{
		expected: [
			'CHINESE',
			'STRUGGLE',
			'FORTITUDE',
			'FIVE',
			'PREDICATE',
			'JUICE',
		],
		result: words.newMap((word) => word.toUpperCase()),
	}
);

// Tests for newFilter
console.assert(
	nums.newFilter((item) => item > 0).newJoin() ===
		nums.filter((item) => item > 0).newJoin(),
	{
		expected: [1, 2, 30, 45, 678],
		result: nums.newFilter((item) => item > 0),
	}
);
console.assert(
	words.newFilter((word) => word[0] === 'f').newJoin() ===
		words.filter((word) => word[0] === 'f').newJoin(),
	{
		expected: ['fortitude', 'five'],
		result: words.newFilter((word) => word[0] === 'f'),
	}
);

// Tests for newReduce
console.assert(
	nums.newReduce((acc, curr) => acc + curr, 0) ===
		nums.reduce((acc, curr) => acc + curr, 0),
	{
		expected: 752,
		result: nums.newReduce((acc, curr) => acc + curr, 0),
	}
);
console.assert(
	words.newReduce((acc, curr) => acc + ', ' + curr, 'towel') ===
		words.reduce((acc, curr) => acc + ', ' + curr, 'towel'),
	{
		expected: 'towel, Chinese, struggle, fortitude, five, predicate, juice',
		result: words.newReduce((acc, curr) => acc + ', ' + curr),
	}
);

// Tests for newFlat
console.assert(
	newFlat([1, 2, [3, 4]]).newJoin() === [1, 2, [3, 4]].flat().newJoin(),
	{
		expected: [1, 2, [3, 4]].flat(),
		result: newFlat([1, 2, [3, 4]]),
	}
);
console.assert(
	newFlat(['1', ['22', 35, { hello: 'world' }, ['hi', 'hey']]], 2).join() ===
		['1', ['22', 35, { hello: 'world' }, ['hi', 'hey']]].flat(2).join(),
	{
		expected: ['1', ['22', 35, { hello: 'world' }, ['hi', 'hey']]]
			.flat(2)
			.join(),
		result: newFlat(
			['1', ['22', 35, { hello: 'world' }, ['hi', 'hey']]],
			2
		).join(),
	}
);
