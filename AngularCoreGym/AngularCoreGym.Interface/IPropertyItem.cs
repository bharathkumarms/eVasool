using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AngularCoreGym.Models;

namespace AngularCoreGym.Interface
{
    public interface IPropertyItem
    {
        bool AddPropertyItem(PropertyItem propertyItem);
        List<PropertyItem> GetPropertyItemList();

        PropertyItem GetPropertyItembyId(int schemeId);
        
        bool UpdatePropertyItem(PropertyItem propertyItem);
        /*
        bool DeleteScheme(int schemeId);
        bool CheckSchemeNameExists(string schemeName);

        List<SchemeMaster> GetActiveSchemeMasterList();*/
    }
}
