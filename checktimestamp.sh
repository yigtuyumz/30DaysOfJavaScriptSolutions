#!/usr/bin/bash

# daha iyi cikti icin, renklendirme kullaniliyor. asagidaki uc degisken, kod
# tekrarindan kacinmak icin tanimlanmistir.
color_green="\e[32m"
color_red="\e[31m"
color_reset="\e[0m"

##########################################################################################################################################
# # LOG dosyasinin ismi.                                                                                                                 #
# ERROR_LOG_FILENAME=timestamp_err.txt                                                                                                   #
#                                                                                                                                        #
# bu kisim hem dosyayi temizlemek icin kullanilmakta, hem de dosyada                                                                     #
# # bilgilendirme satirinin bulunmasini saglamaktadir.                                                                                   #
#                                                                                                                                        #
# echo -e "\\\\\\\\****\tThe last 10 lines of the following files, do not have a valid timestamp.\t****////\n\n" > ${ERROR_LOG_FILENAME} #
##########################################################################################################################################



# bu deger, dosyalarin sondan kac satira regex kontrolu yapilacagini belirtir.
line_count=10

# kontrol edilecek string ifadesinin Regular Expression'u.
# TODO bu RegEXP ifadesi daha iyi bir hale getirilebilinir.
# TODO date "+%Y-%m-%d %H:%M:%S" stringine esit bir ifade bekleniyor.
regexp='\/\/ Last Edit : '

# dosya kontrolu. hatali dosyalarin konumlarinin LOG edilmesi bu while
# dongusunde gerceklesmektedir. son satirda uygulanan komutun her bir satiri
# 'line' degiskenine alinmaktadir.
while IFS='' read -r line; do

	# bu degisken son 'line_count' satirdaki string'i elde etmek icin kullanilmaktadir.
	# line degiskeni, while dongusunun her bir asamasinda elde edilen 'find'
	# komutunun ciktisidir.
	last_lines=$( tail -n ${line_count} "${line}" )

	# bu if kosulu regex kontrolu yapar. eger regex ifadesine eslesme varsa LOG
	# dosyasina yazma islemi olmamakta, eslesme yoksa (istenmeyen durum) LOG
	# dosyasina eslesme bulunmayan dosyalarin konumlarini yazmaktadir.
	if [[ ${last_lines} =~ ${regexp} ]]; then
		# eslesme var, sadece kullaniciyi bilgilendirir.
		echo -e "${line} ${color_green}\tOK${color_reset}"
	else
		# eslesme yok, kullaniciyi bilgilendirir.
		echo -e "${line} ${color_red}\tNOK\tinserted current timestamp.${color_reset}"

		# eslesme olmayan dosyalarin sonuna current-timestamp ekler.
		echo -e "\n// Last Edit : $(date "+%Y-%m-%d %H:%M:%S")\n" >> "${line}"

##############################################################################################################################
#        # LOG dosyasina dosyanin konumunu ekler.                                                                            #
#                                                                                                                            #
#            # sed ve tr kullanimi, konumlarin Windows dosya konumlandirma tipinde olmasi                                    #
#            # icindir.                                                                                                      #
#        echo "${line}" | sed 's/^./C:\\Users\\yigit\\OneDrive\\Desktop\\30days/' | tr '/' '\\' >> ${ERROR_LOG_FILENAME}     #
##############################################################################################################################

	fi
done < <(find ./ -name "*.js" -not -path "./node_modules/*")

