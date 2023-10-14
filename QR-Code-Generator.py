import qrcode

profile = input("Enter your profile: ")

data = 'https://www.linkedin.com/in/' + profile

qr = qrcode.QRCode(version=1, box_size=10, border=5)
qr.add_data(data)
qr.make(fit=True)
img = qr.make_image()

destination = input("Enter the destination directory to save the QR code image: ")

filename = input("Enter the filename for the QR code image (including the extension, like, myqrcode.png): ")

filepath = destination + '/' + filename
