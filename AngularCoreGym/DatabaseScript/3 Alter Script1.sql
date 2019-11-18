USE [AngularGYMDB]
GO
/****** Object:  StoredProcedure [dbo].[Usp_GetAllRenwalrecords]    Script Date: 11/18/2019 2:43:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER proc [dbo].[Usp_GetAllRenwalrecords]            

         

as            

            

begin            

            

SELECT             

 m.MemberFName + ' | ' + m.MemberLName  AS Name  ,       

 m.Address,      

 m.Contactno,      

 m.EmailID,           

 m.MemberId,
 m.DOB,
 m.Gender,
 m.JoiningDate

FROM MemberRegistration m     

 order BY m.CreatedDate, m.MemberId desc        

            

end

	
USE [AngularGYMDB]
GO
/****** Object:  StoredProcedure [dbo].[sprocMemberRegistrationInsertUpdateSingleItem]    Script Date: 11/18/2019 2:52:01 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER    

 PROCEDURE [dbo].[sprocMemberRegistrationInsertUpdateSingleItem] (    

  @MemberId BIGINT = 0    

 ,@MemberFName NVARCHAR(100) = NULL    

 ,@MemberLName NVARCHAR(100) = NULL    

 ,@MemberMName NVARCHAR(100) = NULL    

 ,@Address NVARCHAR(500) = NULL    

 ,@DOB DATETIME    

 ,@Age NVARCHAR(10) = NULL    

 ,@Contactno NVARCHAR(10) = NULL    

 ,@EmailID NVARCHAR(30) = NULL    

 ,@Gender NVARCHAR(30) = NULL    

 ,@PlanID INT = 0    

 ,@SchemeID INT = 0    

 ,@Createdby BIGINT = 0    

 ,@ModifiedBy BIGINT = 0    

 ,@JoiningDate DATETIME    

 ,@MemIDOUT int out    

 )    

AS    

DECLARE @ReturnValue INT    

    

IF (@MemberId = 0) -- New Item                    

BEGIN    

 DECLARE @MemberNo VARCHAR(20)    

 DECLARE @MainMemberID VARCHAR(20)    

 DECLARE @tables TABLE (    

  MemberNo VARCHAR(20)    

  ,Memnumber VARCHAR(20)    

  )    

    

 INSERT INTO @tables    

 EXEC Usp_Generatenumber    

    

 SELECT @MemberNo = MemberNo    

  ,@MainMemberID = Memnumber    

 FROM @tables    

    

 INSERT INTO [MemberRegistration] (    

  MemberFName    

  ,MemberLName    

  ,MemberMName    

  ,DOB    

  ,Age    

  ,Contactno    

  ,EmailID    

  ,Gender    

  ,PlanID    

  ,SchemeID    

  ,Createdby    

  ,CreatedDate    

  ,ModifiedBy    

  ,JoiningDate    

  ,Address    

  ,MainMemberID    

  ,MemberNo    

  )    

 VALUES (    

  @MemberFName    

  ,@MemberLName    

  ,@MemberMName    

  ,@DOB    

  ,@Age    

  ,@Contactno    

  ,@EmailID    

  ,@Gender    

  ,@PlanID

  ,@SchemeID    

  ,@Createdby    

  ,GETDATE()    

  ,@ModifiedBy    

  ,CONVERT(date,@JoiningDate,103)    

  ,@Address    

  ,@MainMemberID    

  ,@MemberNo    

  )    

    

 SELECT @ReturnValue = SCOPE_IDENTITY()    

 set @MemIDOUT =SCOPE_IDENTITY()    

END    

ELSE    

BEGIN    

 UPDATE [MemberRegistration]    

 SET MemberFName = @MemberFName    

  ,MemberLName = @MemberLName    

  ,MemberMName = @MemberMName    

  ,DOB = @DOB    

  ,Age = @Age    

  ,Contactno = @Contactno    

  ,EmailID = @EmailID    

  ,Gender = @Gender    

  ,Createdby = @Createdby    

  ,ModifiedBy = @ModifiedBy    

  ,Address = @Address    

 WHERE MemberRegistration.MemberId = @MemberId    

   
 SELECT @ReturnValue = @MemberId    
  set @MemIDOUT =@MemberId    

  

END    

    

IF (@@ERROR != 0)    

BEGIN    

 RETURN - 1    

END    

ELSE    

BEGIN    

 RETURN @ReturnValue    

     

END





