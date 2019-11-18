export class PropertyItemMasterModel {
    public PropertyItemId: number = 0;
    public Name: string = "";
    public Description: string = "";
    public Area: string = "";
    public AddressLine1: string = "";
    public AddressLine2: string = "";
    public City: string = "";
    public Country: string = "";
    public Zip: string = "";
    public LeaseDueDate: Date=null;
    public NextDueDate: Date=null;
    public IsActive: boolean = true;
    public TotalLeaseAmount: number = null;
    public InstallmentAmount: number = null;
    public InstallementPaid: number = null;
    public Notes: string = "";
    public Phone: string = "";
    public Email: string = "";
    public CreatedDate: Date;
    public ModifiedDate: Date;
    public CreatedBy: string = "";
    public ModifiedBy: string = "";
    public MemberId: number = null;
}
