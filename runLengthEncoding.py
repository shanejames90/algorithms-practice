def runLengthEncoding(string):
    # Write your code here.
    i = 0
    while i < len(string) - 1:
        count = 1
        while (i < len(string) - 1 && string[i] == string[i + 1]):
            count += 1
            i += 1
        i += 1
        print(string[i - 1] + string(count), end = "")




def runLengthEncoding(string):
    count = 0
    chatacter = ''
    previous_char = string[0]
    result = ''
    length = len(string)

    i = 0
    while (i != length ):
        chatacter = string[i]

        if previous_char == chatacter :
            count = count + 1
        else :
            result = result + str(count) + previous_char
            count = 1
        previous_char = chatacter
        i = i + 1

    return result + str(count) + str(previous_char)
