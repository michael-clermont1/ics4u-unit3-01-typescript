/**
 * This is a reverse string function.
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-17
 */

/**
 * The function gets the reversestring
 *
 * @param {string} string - string value
 * @returns {string} - Return value
 */
function reverseString (string: string): string {
  if (string === '') {
    return string
  } else {
    return reverseString(string.slice(1, 10)) + string[0]
  }
}

/**
 * The function is the main function
 *
 */
function main (): void {
  const aString = 'recusrsion'

  console.log('')
  console.log('The original string is: %s', aString)
  console.log('The reversed string is: %s', reverseString(aString))

  console.log('\nDone.')
}
main()
