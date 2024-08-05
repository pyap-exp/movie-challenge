import json
def get_raw_json(file:str):
    data = {}
    with open(f"../raw_data/{file}.json", "r") as file1:
        # Writing data to a file
        #file1.write("Hello \n")
        #file1.writelines(L)
        data = json.loads(file1.read())
        file1.close()
    return data
