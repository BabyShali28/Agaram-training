elec_unit=int(input("enter the unit:"))
elec_rate=int(input("enter the rate:"))
total_unit=elec_unit*elec_rate
if elec_unit>100:
    gst=(total_unit+50)*0.18
    print(total_unit+gst)
elif elec_unit>=500 and elec_unit<=1000:
    gst=(total_unit+(total_unit*0.05))*0.18
    print(total_unit+gst)
else:
# elec_unit<=100:
    gst=total_unit*0.18
    print(total_unit+gst)
