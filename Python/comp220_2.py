import csv

def census_data(file1, file2):
	class_dict = {}
	sector_dict = {}
	line_count = 0
	with open(file1, 'r') as census:
		census_read = csv.DictReader(census)
		for line in census_read:
			line_count += 1
			class_dict[line['CLASS']] = 0
			sector_dict[line['SECTOR']] = 0

	with open(file1, 'r') as census2:
		census_read2 = csv.DictReader(census2)
		for line in census_read2:
			class_dict[line['CLASS']] += int(line['RES_CNT'])
			sector_dict[line['SECTOR']] += int(line['RES_CNT'])

	with open(file2, 'w', newline='') as report:
		writer = csv.writer(report)
		writer.writerow([f"There are {line_count} lines in {file1}"])
		writer.writerow([])
		writer.writerow(['------------------RES_CNT by CLASS---------------'])
		writer.writerow([])
		for key in class_dict:
			writer.writerow([f"Total Residents in {key}: {class_dict[key]}"])
			writer.writerow([])
		writer.writerow([])
		writer.writerow(['------------------RES_CNT by SECTOR---------------'])
		writer.writerow([])
		for key in sector_dict:
			writer.writerow([f"Total Residents in {key}: {sector_dict[key]}"])
			writer.writerow([])
		print(f"{file2} has Been Writen")

census_data('census.csv', 'report.txt')

