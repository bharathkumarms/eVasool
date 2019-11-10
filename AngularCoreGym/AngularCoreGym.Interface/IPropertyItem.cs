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
        /*List<SchemeMaster> GetSchemeMasterList();
        SchemeMaster GetSchemeMasterbyId(int schemeId);
        bool CheckSchemeNameExists(string schemeName);
        bool UpdateSchemeMaster(SchemeMaster schemeMaster);
        bool DeleteScheme(int schemeId);

        List<SchemeMaster> GetActiveSchemeMasterList();*/
    }
}
