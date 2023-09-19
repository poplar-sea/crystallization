package main

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
)

func main() {
	// 定义要修改的文件夹路径和新的文件夹名称
	folderPath := "./"
	// newFolderName := "./"
	files, err := os.ReadDir(folderPath)
	if err != nil {
		fmt.Println("Error reading directory:", err)
		return
	}

	for key, file := range files {
		oldFilePath := filepath.Join(folderPath, file.Name())
		newFilePath := ""
		if strings.Contains(oldFilePath, "main.go") {
			continue
		}
		if strings.Contains(oldFilePath, "02") {
			newFilePath = "02-数据类型.md"
			err = os.Rename(oldFilePath, newFilePath)
			if err != nil {
				fmt.Println("Error renaming file:", err)
				continue
			}
		}
		fmt.Println(oldFilePath, key)

	}
}
