FILE=pipo.pdf

crypt:
	gpg --output slides.tgz.gpg --symmetric --cipher-algo AES256 slides.tgz
	rm -f slides.tgz

decrypt:
	gpg --output slides.tgz --decrypt slides.tgz.gpg

compress:
	gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=$(FILE)-c.pdf $(FILE).pdf

